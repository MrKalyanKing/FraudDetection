// import { useState } from 'react';
// import AppLayout from '@/components/layout/AppLayout';
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/Dashboard/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Dashboard/ui/tabs";
// import { 
//   BarChart, 
//   Bar, 
//   LineChart,
//   Line,
//   PieChart, 
//   Pie, 
//   Cell, 
//   XAxis, 
//   YAxis, 
//   CartesianGrid, 
//   Tooltip, 
//   Legend, 
//   ResponsiveContainer 
// } from 'recharts';
// import { fraudMetrics, fraudTypes } from '@/components/data/mockData';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/Dashboard/ui/select";

// // Mock data for transaction volume by month
// const transactionDataMonthly = [
//   { name: 'Jan', value: 4000000 },
//   { name: 'Feb', value: 3000000 },
//   { name: 'Mar', value: 2000000 },
//   { name: 'Apr', value: 2780000 },
//   { name: 'May', value: 1890000 },
//   { name: 'Jun', value: 2390000 },
//   { name: 'Jul', value: 3490000 },
//   { name: 'Aug', value: 4000000 },
//   { name: 'Sep', value: 3000000 },
//   { name: 'Oct', value: 2000000 },
//   { name: 'Nov', value: 2780000 },
//   { name: 'Dec', value: 3890000 },
// ];

// // Aggregate transaction data for quarterly view
// const transactionDataQuarterly = [
//   { name: 'Q1', value: 4000000 + 3000000 + 2000000 }, // Jan-Mar
//   { name: 'Q2', value: 2780000 + 1890000 + 2390000 }, // Apr-Jun
//   { name: 'Q3', value: 3490000 + 4000000 + 3000000 }, // Jul-Sep
//   { name: 'Q4', value: 2000000 + 2780000 + 3890000 }, // Oct-Dec
// ];

// // Aggregate transaction data for yearly view
// const transactionDataYearly = [
//   { name: '2024', value: transactionDataMonthly.reduce((sum, month) => sum + month.value, 0) },
// ];

// // Mock data for customer demographics
// const customerDemographics = [
//   { name: '18-24', value: 15 },
//   { name: '25-34', value: 30 },
//   { name: '35-44', value: 25 },
//   { name: '45-54', value: 15 },
//   { name: '55+', value: 15 },
// ];

// // Colors for the demographics pie chart
// const demographicColors = ['#8884d8', '#83a6ed', '#8dd1e1', '#82ca9d', '#a4de6c'];

// export default function AnalyticsPage() {
//   const [timeRange, setTimeRange] = useState('yearly');
//   const [metricType, setMetricType] = useState('volume');

//   // Select the appropriate transaction data based on timeRange
//   const getTransactionData = () => {
//     switch (timeRange) {
//       case 'monthly':
//         return transactionDataMonthly;
//       case 'quarterly':
//         return transactionDataQuarterly;
//       case 'yearly':
//         return transactionDataYearly;
//       default:
//         return transactionDataYearly;
//     }
//   };

//   // Aggregate fraud metrics for quarterly and yearly views
//   const fraudMetricsQuarterly = [
//     { 
//       name: 'Q1', 
//       normal: fraudMetrics.slice(0, 3).reduce((sum, m) => sum + m.normal, 0), 
//       suspicious: fraudMetrics.slice(0, 3).reduce((sum, m) => sum + m.suspicious, 0) 
//     },
//     { 
//       name: 'Q2', 
//       normal: fraudMetrics.slice(3, 6).reduce((sum, m) => sum + m.normal, 0), 
//       suspicious: fraudMetrics.slice(3, 6).reduce((sum, m) => sum + m.suspicious, 0) 
//     },
//     { 
//       name: 'Q3', 
//       normal: fraudMetrics.slice(6, 9).reduce((sum, m) => sum + m.normal, 0), 
//       suspicious: fraudMetrics.slice(6, 9).reduce((sum, m) => sum + m.suspicious, 0) 
//     },
//     { 
//       name: 'Q4', 
//       normal: fraudMetrics.slice(9, 12).reduce((sum, m) => sum + m.normal, 0), 
//       suspicious: fraudMetrics.slice(9, 12).reduce((sum, m) => sum + m.suspicious, 0) 
//     },
//   ];

//   const fraudMetricsYearly = [
//     { 
//       name: '2024', 
//       normal: fraudMetrics.reduce((sum, m) => sum + m.normal, 0), 
//       suspicious: fraudMetrics.reduce((sum, m) => sum + m.suspicious, 0) 
//     },
//   ];

//   const getFraudMetrics = () => {
//     switch (timeRange) {
//       case 'monthly':
//         return fraudMetrics;
//       case 'quarterly':
//         return fraudMetricsQuarterly;
//       case 'yearly':
//         return fraudMetricsYearly;
//       default:
//         return fraudMetricsYearly;
//     }
//   };

//   // Calculate total transaction volume for stats
//   const totalTransactionVolume = transactionDataMonthly.reduce((sum, month) => sum + month.value, 0);
//   const totalTransactionCount = 1400000; // As per the static data in the JSX
//   const averageTransactionSize = totalTransactionVolume / totalTransactionCount;

//   return (
//     <AppLayout title="Analytics Dashboard">
//       <div className="space-y-6">
//         {/* Filter Controls */}
//         <div className="flex flex-col sm:flex-row gap-4 items-center bg-white p-4 rounded-lg shadow-sm">
//           <h2 className="text-lg font-semibold text-gray-800 mr-auto">Analytics Dashboard</h2>
//           <div className="flex gap-4">
//             <Select value={timeRange} onValueChange={setTimeRange}>
//               <SelectTrigger className="w-[150px]">
//                 <SelectValue placeholder="Select time range" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="monthly">Monthly</SelectItem>
//                 <SelectItem value="quarterly">Quarterly</SelectItem>
//                 <SelectItem value="yearly">Yearly</SelectItem>
//               </SelectContent>
//             </Select>
            
//             <Select value={metricType} onValueChange={setMetricType}>
//               <SelectTrigger className="w-[180px]">
//                 <SelectValue placeholder="Select metric type" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="volume">Transaction Volume</SelectItem>
//                 <SelectItem value="fraud">Fraud Incidents</SelectItem>
//                 <SelectItem value="customers">Customer Growth</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>
//         </div>
        
//         {/* Transaction Volume Chart */}
//         {metricType === 'volume' && (
//           <Card className="shadow-sm border border-gray-100">
//             <CardHeader className="px-5 py-4 border-b border-gray-100">
//               <CardTitle className="text-lg font-semibold text-gray-800">Transaction Volume Analysis</CardTitle>
//             </CardHeader>
//             <CardContent className="p-5">
//               <div className="h-[400px]">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <BarChart
//                     data={getTransactionData()}
//                     margin={{ top: 20, right: 30, left: 20, bottom: 30 }}
//                   >
//                     <CartesianGrid strokeDasharray="3 3" vertical={false} />
//                     <XAxis dataKey="name" />
//                     <YAxis 
//                       tickFormatter={(value) => `₹${(value / 1000000).toFixed(1)}M`}
//                       label={{ value: 'Amount (Millions)', angle: -90, position: 'insideLeft', offset: -5 }}
//                     />
//                     <Tooltip formatter={(value) => [`₹${(Number(value) / 1000000).toFixed(2)}M`, 'Transaction Volume']} />
//                     <Legend />
//                     <Bar dataKey="value" name="Transaction Volume" fill="#3B82F6" />
//                   </BarChart>
//                 </ResponsiveContainer>
//               </div>
              
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
//                 <div className="bg-blue-50 p-4 rounded-lg">
//                   <p className="text-sm text-gray-500">Total Transaction Volume</p>
//                   <p className="text-2xl font-semibold text-gray-800">
//                     ₹{(totalTransactionVolume / 1000000000).toFixed(2)}B
//                   </p>
//                   <p className="text-sm text-green-600 flex items-center mt-1">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
//                       <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
//                     </svg>
//                     7.2% Increase
//                   </p>
//                 </div>
//                 <div className="bg-green-50 p-4 rounded-lg">
//                   <p className="text-sm text-gray-500">Average Transaction Size</p>
//                   <p className="text-2xl font-semibold text-gray-800">
//                     ₹{Math.round(averageTransactionSize).toLocaleString('en-IN')}
//                   </p>
//                   <p className="text-sm text-green-600 flex items-center mt-1">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
//                       <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
//                     </svg>
//                     3.5% Increase
//                   </p>
//                 </div>
//                 <div className="bg-indigo-50 p-4 rounded-lg">
//                   <p className="text-sm text-gray-500">Total Transaction Count</p>
//                   <p className="text-2xl font-semibold text-gray-800">
//                     {(totalTransactionCount / 1000000).toFixed(1)}M
//                   </p>
//                   <p className="text-sm text-green-600 flex items-center mt-1">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
//                       <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
//                     </svg>
//                     5.8% Increase
//                   </p>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         )}
        
//         {/* Fraud Trend Analysis */}
//         {metricType === 'fraud' && (
//           <Card className="shadow-sm border border-gray-100">
//             <CardHeader className="px-5 py-4 border-b border-gray-100">
//               <CardTitle className="text-lg font-semibold text-gray-800">Fraud Trend Analysis</CardTitle>
//             </CardHeader>
//             <CardContent className="p-5">
//               <div className="h-[400px]">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <LineChart
//                     data={getFraudMetrics()}
//                     margin={{ top: 20, right: 30, left: 20, bottom: 30 }}
//                   >
//                     <CartesianGrid strokeDasharray="3 3" vertical={false} />
//                     <XAxis dataKey="name" />
//                     <YAxis />
//                     <Tooltip />
//                     <Legend />
//                     <Line type="monotone" dataKey="normal" stroke="#3B82F6" name="Normal Transactions" />
//                     <Line type="monotone" dataKey="suspicious" stroke="#EF4444" name="Suspicious Activity" />
//                   </LineChart>
//                 </ResponsiveContainer>
//               </div>
//             </CardContent>
//           </Card>
//         )}
        
//         {/* Customer Demographics */}
//         {metricType === 'customers' && (
//           <Card className="shadow-sm border border-gray-100">
//             <CardHeader className="px-5 py-4 border-b border-gray-100">
//               <CardTitle className="text-lg font-semibold text-gray-800">Customer Age Demographics</CardTitle>
//             </CardHeader>
//             <CardContent className="p-5">
//               <div className="h-[400px]">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <PieChart>
//                     <Pie
//                       data={customerDemographics}
//                       cx="50%"
//                       cy="50%"
//                       labelLine={false}
//                       label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
//                       outerRadius={100}
//                       fill="#8884d8"
//                       dataKey="value"
//                     >
//                       {customerDemographics.map((entry, index) => (
//                         <Cell key={`cell-${index}`} fill={demographicColors[index % demographicColors.length]} />
//                       ))}
//                     </Pie>
//                     <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
//                     <Legend />
//                   </PieChart>
//                 </ResponsiveContainer>
//               </div>
//             </CardContent>
//           </Card>
//         )}
        
//         {/* Default Layout: Customer Demographics + Fraud Trend Analysis */}
//         {metricType !== 'volume' && metricType !== 'fraud' && metricType !== 'customers' && (
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//             <Card className="shadow-sm border border-gray-100">
//               <CardHeader className="px-5 py-4 border-b border-gray-100">
//                 <CardTitle className="text-lg font-semibold text-gray-800">Customer Age Demographics</CardTitle>
//               </CardHeader>
//               <CardContent className="p-5">
//                 <div className="h-80">
//                   <ResponsiveContainer width="100%" height="100%">
//                     <PieChart>
//                       <Pie
//                         data={customerDemographics}
//                         cx="50%"
//                         cy="50%"
//                         labelLine={false}
//                         label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
//                         outerRadius={100}
//                         fill="#8884d8"
//                         dataKey="value"
//                       >
//                         {customerDemographics.map((entry, index) => (
//                           <Cell key={`cell-${index}`} fill={demographicColors[index % demographicColors.length]} />
//                         ))}
//                       </Pie>
//                       <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
//                       <Legend />
//                     </PieChart>
//                   </ResponsiveContainer>
//                 </div>
//               </CardContent>
//             </Card>
            
//             <Card className="shadow-sm border border-gray-100">
//               <CardHeader className="px-5 py-4 border-b border-gray-100">
//                 <CardTitle className="text-lg font-semibold text-gray-800">Fraud Trend Analysis</CardTitle>
//               </CardHeader>
//               <CardContent className="p-5">
//                 <div className="h-80">
//                   <ResponsiveContainer width="100%" height="100%">
//                     <LineChart
//                       data={getFraudMetrics()}
//                       margin={{ top: 20, right: 30, left: 20, bottom: 30 }}
//                     >
//                       <CartesianGrid strokeDasharray="3 3" vertical={false} />
//                       <XAxis dataKey="name" />
//                       <YAxis />
//                       <Tooltip />
//                       <Legend />
//                       <Line type="monotone" dataKey="normal" stroke="#3B82F6" name="Normal Transactions" />
//                       <Line type="monotone" dataKey="suspicious" stroke="#EF4444" name="Suspicious Activity" />
//                     </LineChart>
//                   </ResponsiveContainer>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         )}
        
//         {/* Key Insights */}
//         <Card className="shadow-sm border border-gray-100">
//           <CardHeader className="px-5 py-4 border-b border-gray-100">
//             <CardTitle className="text-lg font-semibold text-gray-800">Key Analytics Insights</CardTitle>
//           </CardHeader>
//           <CardContent className="p-5">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <h3 className="text-base font-semibold mb-2">Transaction Insights</h3>
//                 <ul className="space-y-2 list-disc pl-5">
//                   <li className="text-sm text-gray-600">Transaction volume increased by 7.2% compared to previous period</li>
//                   <li className="text-sm text-gray-600">Peak transaction hours are between 10AM-2PM on weekdays</li>
//                   <li className="text-sm text-gray-600">Mobile transactions have grown by 28% year-over-year</li>
//                   <li className="text-sm text-gray-600">Contactless payment adoption increased by 42%</li>
//                 </ul>
//               </div>
//               <div>
//                 <h3 className="text-base font-semibold mb-2">Fraud Prevention Success</h3>
//                 <ul className="space-y-2 list-disc pl-5">
//                   <li className="text-sm text-gray-600">Fraud prevention system stopped ₹3.2M in potential fraud attempts</li>
//                   <li className="text-sm text-gray-600">Real-time monitoring flagged 28 unusual transaction patterns</li>
//                   <li className="text-sm text-gray-600">Successfully prevented 94% of attempted card frauds</li>
//                   <li className="text-sm text-gray-600">Average response time to fraud alerts reduced to 2.5 minutes</li>
//                 </ul>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </AppLayout>
//   );
// }



// import { useState } from 'react';
// import AppLayout from '@/components/layout/AppLayout';
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/Dashboard/ui/card";
// import { 
//   LineChart,
//   Line,
//   PieChart, 
//   Pie, 
//   Cell, 
//   XAxis, 
//   YAxis, 
//   CartesianGrid, 
//   Tooltip, 
//   Legend, 
//   ResponsiveContainer 
// } from 'recharts';
// import { fraudMetrics } from '@/components/data/mockData';

// // Mock data for customer demographics
// const customerDemographics = [
//   { name: '18-24', value: 15 },
//   { name: '25-34', value: 30 },
//   { name: '35-44', value: 25 },
//   { name: '45-54', value: 15 },
//   { name: '55+', value: 15 },
// ];

// // Colors for the demographics pie chart
// const demographicColors = ['#8884d8', '#83a6ed', '#8dd1e1', '#82ca9d', '#a4de6c'];

// export default function AnalyticsPage() {
//   return (
//     <AppLayout title="Analytics Dashboard">
//       <div className="space-y-6">
//         {/* Customer Demographics and Fraud Trend Analysis */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//           {/* Customer Age Demographics */}
//           <Card className="shadow-sm border border-gray-100">
//             <CardHeader className="px-5 py-4 border-b border-gray-100">
//               <CardTitle className="text-lg font-semibold text-gray-800">Customer Age Demographics</CardTitle>
//             </CardHeader>
//             <CardContent className="p-5">
//               <div className="h-80">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <PieChart>
//                     <Pie
//                       data={customerDemographics}
//                       cx="50%"
//                       cy="50%"
//                       labelLine={false}
//                       label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
//                       outerRadius={100}
//                       fill="#8884d8"
//                       dataKey="value"
//                     >
//                       {customerDemographics.map((entry, index) => (
//                         <Cell key={`cell-${index}`} fill={demographicColors[index % demographicColors.length]} />
//                       ))}
//                     </Pie>
//                     <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
//                     <Legend 
//                       verticalAlign="bottom" 
//                       height={36} 
//                       iconType="circle" 
//                       iconSize={10} 
//                       formatter={(value) => <span className="text-sm text-gray-700">{value}</span>}
//                     />
//                   </PieChart>
//                 </ResponsiveContainer>
//               </div>
//             </CardContent>
//           </Card>
          
//           {/* Fraud Trend Analysis */}
//           <Card className="shadow-sm border border-gray-100">
//             <CardHeader className="px-5 py-4 border-b border-gray-100">
//               <CardTitle className="text-lg font-semibold text-gray-800">Fraud Trend Analysis</CardTitle>
//             </CardHeader>
//             <CardContent className="p-5">
//               <div className="h-80">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <LineChart
//                     data={fraudMetrics}
//                     margin={{ top: 20, right: 30, left: 0, bottom: 30 }}
//                   >
//                     <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
//                     <XAxis 
//                       dataKey="name" 
//                       tick={{ fontSize: 12, fill: '#6b7280' }} 
//                       tickLine={false} 
//                       axisLine={{ stroke: '#e5e7eb' }}
//                     />
//                     <YAxis 
//                       tick={{ fontSize: 12, fill: '#6b7280' }} 
//                       tickLine={false} 
//                       axisLine={{ stroke: '#e5e7eb' }}
//                       label={{ 
//                         value: 'Transactions', 
//                         angle: -90, 
//                         position: 'insideLeft', 
//                         offset: -5, 
//                         fontSize: 12, 
//                         fill: '#6b7280' 
//                       }}
//                     />
//                     <Tooltip 
//                       formatter={(value, name) => [value, name]} 
//                       labelStyle={{ fontSize: 12, color: '#374151' }}
//                       itemStyle={{ fontSize: 12 }}
//                     />
//                     <Legend 
//                       verticalAlign="bottom" 
//                       height={36} 
//                       iconType="circle" 
//                       iconSize={10} 
//                       formatter={(value) => <span className="text-sm text-gray-700">{value}</span>}
//                     />
//                     <Line 
//                       type="monotone" 
//                       dataKey="normal" 
//                       stroke="#3B82F6" 
//                       name="Normal Transactions" 
//                       strokeWidth={2} 
//                       dot={false} 
//                     />
//                     <Line 
//                       type="monotone" 
//                       dataKey="suspicious" 
//                       stroke="#EF4444" 
//                       name="Suspicious Activity" 
//                       strokeWidth={2} 
//                       dot={false} 
//                     />
//                   </LineChart>
//                 </ResponsiveContainer>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </AppLayout>
//   );
// }


import { useState } from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/Dashboard/ui/card";
import { 
  BarChart, 
  Bar, 
  LineChart,
  Line,
  PieChart, 
  Pie, 
  Cell, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import { fraudMetrics } from '@/components/data/mockData';

// Mock data for transaction volume by month
const transactionData = [
  { name: 'Jan', value: 4000000 },
  { name: 'Feb', value: 3000000 },
  { name: 'Mar', value: 2000000 },
  { name: 'Apr', value: 2780000 },
  { name: 'May', value: 1890000 },
  { name: 'Jun', value: 2390000 },
  { name: 'Jul', value: 3490000 },
  { name: 'Aug', value: 4000000 },
  { name: 'Sep', value: 3000000 },
  { name: 'Oct', value: 2000000 },
  { name: 'Nov', value: 2780000 },
  { name: 'Dec', value: 3890000 },
];

// Mock data for customer demographics
const customerDemographics = [
  { name: '18-24', value: 15 },
  { name: '25-34', value: 30 },
  { name: '35-44', value: 25 },
  { name: '45-54', value: 15 },
  { name: '55+', value: 15 },
];

// Colors for the demographics pie chart
const demographicColors = ['#8884d8', '#83a6ed', '#8dd1e1', '#82ca9d', '#a4de6c'];

export default function AnalyticsPage() {
  // Calculate stats dynamically
  const totalTransactionVolume = transactionData.reduce((sum, month) => sum + month.value, 0);
  const totalTransactionCount = 1400000; // As per the static data in the original JSX
  const averageTransactionSize = totalTransactionVolume / totalTransactionCount;

  return (
    <AppLayout title="Analytics Dashboard">
      <div className="space-y-6">
        {/* Transaction Volume Chart */}
        <Card className="shadow-sm border border-gray-100">
          <CardHeader className="px-5 py-4 border-b border-gray-100">
            <CardTitle className="text-lg font-semibold text-gray-800">Transaction Volume Analysis</CardTitle>
          </CardHeader>
          <CardContent className="p-5">
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={transactionData}
                  margin={{ top: 20, right: 30, left: 0, bottom: 30 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                  <XAxis 
                    dataKey="name" 
                    tick={{ fontSize: 12, fill: '#6b7280' }} 
                    tickLine={false} 
                    axisLine={{ stroke: '#e5e7eb' }}
                  />
                  <YAxis 
                    tickFormatter={(value) => `₹${(value / 1000000).toFixed(1)}M`}
                    tick={{ fontSize: 12, fill: '#6b7280' }} 
                    tickLine={false} 
                    axisLine={{ stroke: '#e5e7eb' }}
                    label={{ 
                      value: 'Amount (Millions)', 
                      angle: -90, 
                      position: 'insideLeft', 
                      offset: -5, 
                      fontSize: 12, 
                      fill: '#6b7280' 
                    }}
                  />
                  <Tooltip 
                    formatter={(value) => [`₹${(Number(value) / 1000000).toFixed(2)}M`, 'Transaction Volume']} 
                    labelStyle={{ fontSize: 12, color: '#374151' }}
                    itemStyle={{ fontSize: 12 }}
                  />
                  <Legend 
                    verticalAlign="bottom" 
                    height={36} 
                    iconType="rect" 
                    iconSize={10} 
                    formatter={(value) => <span className="text-sm text-gray-700">{value}</span>}
                  />
                  <Bar 
                    dataKey="value" 
                    name="Transaction Volume" 
                    fill="#3B82F6" 
                    radius={[4, 4, 0, 0]} 
                    barSize={20} 
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-gray-500">Total Transaction Volume</p>
                <p className="text-2xl font-semibold text-gray-800">
                  ₹{(totalTransactionVolume / 1000000000).toFixed(2)}B
                </p>
                <p className="text-sm text-green-600 flex items-center mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                  </svg>
                  7.2% Increase
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm text-gray-500">Average Transaction Size</p>
                <p className="text-2xl font-semibold text-gray-800">
                  ₹{Math.round(averageTransactionSize).toLocaleString('en-IN')}
                </p>
                <p className="text-sm text-green-600 flex items-center mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                  </svg>
                  3.5% Increase
                </p>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg">
                <p className="text-sm text-gray-500">Total Transaction Count</p>
                <p className="text-2xl font-semibold text-gray-800">
                  {(totalTransactionCount / 1000000).toFixed(1)}M
                </p>
                <p className="text-sm text-green-600 flex items-center mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                  </svg>
                  5.8% Increase
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Customer Demographics and Fraud Trend Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Customer Age Demographics */}
          <Card className="shadow-sm border border-gray-100">
            <CardHeader className="px-5 py-4 border-b border-gray-100">
              <CardTitle className="text-lg font-semibold text-gray-800">Customer Age Demographics</CardTitle>
            </CardHeader>
            <CardContent className="p-5">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={customerDemographics}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {customerDemographics.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={demographicColors[index % demographicColors.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                    <Legend 
                      verticalAlign="bottom" 
                      height={36} 
                      iconType="circle" 
                      iconSize={10} 
                      formatter={(value) => <span className="text-sm text-gray-700">{value}</span>}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          {/* Fraud Trend Analysis */}
          <Card className="shadow-sm border border-gray-100">
            <CardHeader className="px-5 py-4 border-b border-gray-100">
              <CardTitle className="text-lg font-semibold text-gray-800">Fraud Trend Analysis</CardTitle>
            </CardHeader>
            <CardContent className="p-5">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={fraudMetrics}
                    margin={{ top: 20, right: 30, left: 0, bottom: 30 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                    <XAxis 
                      dataKey="name" 
                      tick={{ fontSize: 12, fill: '#6b7280' }} 
                      tickLine={false} 
                      axisLine={{ stroke: '#e5e7eb' }}
                    />
                    <YAxis 
                      tick={{ fontSize: 12, fill: '#6b7280' }} 
                      tickLine={false} 
                      axisLine={{ stroke: '#e5e7eb' }}
                      label={{ 
                        value: 'Transactions', 
                        angle: -90, 
                        position: 'insideLeft', 
                        offset: -5, 
                        fontSize: 12, 
                        fill: '#6b7280' 
                      }}
                    />
                    <Tooltip 
                      formatter={(value, name) => [value, name]} 
                      labelStyle={{ fontSize: 12, color: '#374151' }}
                      itemStyle={{ fontSize: 12 }}
                    />
                    <Legend 
                      verticalAlign="bottom" 
                      height={36} 
                      iconType="circle" 
                      iconSize={10} 
                      formatter={(value) => <span className="text-sm text-gray-700">{value}</span>}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="normal" 
                      stroke="#3B82F6" 
                      name="Normal Transactions" 
                      strokeWidth={2} 
                      dot={false} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="suspicious" 
                      stroke="#EF4444" 
                      name="Suspicious Activity" 
                      strokeWidth={2} 
                      dot={false} 
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}