import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Activity, TrendingUp, Shield, AlertTriangle } from 'lucide-react';
import { getAllPests } from '../services/pestDetectionService';

interface FarmDashboardProps {
  language: 'english' | 'telugu';
}

const COLORS = ['#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#06B6D4'];

export default function FarmDashboard({ language }: FarmDashboardProps) {
  const [stats, setStats] = useState({
    totalDetections: 47,
    healthScore: 82,
    riskLevel: 'medium' as const,
    pestDistribution: [
      { name: 'Aphids', value: 15, color: '#EF4444' },
      { name: 'Whitefly', value: 12, color: '#F59E0B' },
      { name: 'Caterpillars', value: 10, color: '#8B5CF6' },
      { name: 'Leaf Hoppers', value: 8, color: '#06B6D4' },
      { name: 'Others', value: 2, color: '#6B7280' }
    ],
    weeklyData: [
      { day: 'Mon', detections: 5 },
      { day: 'Tue', detections: 8 },
      { day: 'Wed', detections: 6 },
      { day: 'Thu', detections: 12 },
      { day: 'Fri', detections: 9 },
      { day: 'Sat', detections: 4 },
      { day: 'Sun', detections: 3 }
    ]
  });

  const texts = {
    english: {
      title: 'Farm Health Dashboard',
      totalDetections: 'Total Detections',
      healthScore: 'Health Score',
      riskLevel: 'Risk Level',
      pestDistribution: 'Pest Distribution',
      weeklyActivity: '7-Day Activity',
      detections: 'Detections',
      low: 'Low Risk',
      medium: 'Medium Risk',
      high: 'High Risk'
    },
    telugu: {
      title: 'వ్యవసాయ ఆరోగ్య డాష్‌బోర్డ్',
      totalDetections: 'మొత్తం గుర్తింపులు',
      healthScore: 'ఆరోగ్య స్కోర్',
      riskLevel: 'ప్రమాద స్థాయి',
      pestDistribution: 'కీట వ్యాప్తి',
      weeklyActivity: '7-రోజుల కార్యకలాపాలు',
      detections: 'గుర్తింపులు',
      low: 'తక్కువ ప్రమాదం',
      medium: 'మధ్యస్థ ప్రమాదం',
      high: 'అధిక ప్రమాదం'
    }
  };

  const text = texts[language];

  const getHealthScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'low': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'high': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getRiskText = (level: string) => {
    switch (level) {
      case 'low': return text.low;
      case 'medium': return text.medium;
      case 'high': return text.high;
      default: return level;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3 mb-6">
        <Activity className="w-8 h-8 text-green-600" />
        <h2 className="text-3xl font-bold text-gray-900">{text.title}</h2>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-blue-100 rounded-lg">
              <TrendingUp className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">{text.totalDetections}</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalDetections}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-green-100 rounded-lg">
              <Shield className={`w-6 h-6 ${getHealthScoreColor(stats.healthScore)}`} />
            </div>
            <div>
              <p className="text-sm text-gray-600">{text.healthScore}</p>
              <p className={`text-2xl font-bold ${getHealthScoreColor(stats.healthScore)}`}>
                {stats.healthScore}%
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-yellow-100 rounded-lg">
              <AlertTriangle className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">{text.riskLevel}</p>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getRiskColor(stats.riskLevel)}`}>
                {getRiskText(stats.riskLevel)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly Activity Chart */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">{text.weeklyActivity}</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={stats.weeklyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="detections" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pest Distribution Chart */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">{text.pestDistribution}</h3>
          <div className="flex flex-col lg:flex-row items-center">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={stats.pestDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {stats.pestDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}