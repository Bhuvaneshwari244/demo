import { WeatherData } from '../types/pest';

export async function getCurrentWeather(lat?: number, lon?: number): Promise<WeatherData> {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Simulate weather data (in real app, call actual weather API)
  const temperature = 25 + Math.random() * 10; // 25-35°C
  const humidity = 60 + Math.random() * 30; // 60-90%
  const rainfall = Math.random() * 5; // 0-5mm
  const windSpeed = Math.random() * 10; // 0-10 km/h
  
  // Calculate pest risk based on weather conditions
  let pestRiskLevel: 'low' | 'medium' | 'high' = 'low';
  let recommendations: string[] = [];
  
  if (humidity > 80 && temperature > 28) {
    pestRiskLevel = 'high';
    recommendations = [
      'High humidity and temperature favor pest activity',
      'Increase monitoring frequency',
      'Consider preventive spraying',
      'Ensure good field drainage'
    ];
  } else if (humidity > 70 || temperature > 30) {
    pestRiskLevel = 'medium';
    recommendations = [
      'Moderate conditions for pest development',
      'Regular field monitoring recommended',
      'Maintain proper plant spacing for air circulation'
    ];
  } else {
    recommendations = [
      'Weather conditions are favorable',
      'Continue routine monitoring',
      'Good time for field operations'
    ];
  }
  
  return {
    temperature: Math.round(temperature * 10) / 10,
    humidity: Math.round(humidity),
    rainfall: Math.round(rainfall * 10) / 10,
    windSpeed: Math.round(windSpeed * 10) / 10,
    pestRiskLevel,
    recommendations
  };
}

export async function getWeatherForecast(days: number = 7): Promise<WeatherData[]> {
  const forecast: WeatherData[] = [];
  
  for (let i = 0; i < days; i++) {
    const weather = await getCurrentWeather();
    forecast.push(weather);
  }
  
  return forecast;
}