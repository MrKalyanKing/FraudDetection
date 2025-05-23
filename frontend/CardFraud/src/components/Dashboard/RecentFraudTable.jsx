// import { useState } from 'react';
// import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/Dashboard/ui/Card";
// import { Button } from "@/components/Dashboard/ui/button";
// import { 
//   Table, 
//   TableBody, 
//   TableCell, 
//   TableHead, 
//   TableHeader, 
//   TableRow 
// } from "@/components/Dashboard/ui/table";
// import { Badge } from "@/components/Dashboard/ui/badge";
// import { recentFraudAlerts } from '@/components/data/mockData';
// import { formatCurrency, formatDate } from '@/components/lib/util';

// export default function RecentFraudTable() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const totalPages = 3; // Assuming 3 pages for demo
  
//   // Status badge styling
//   const getBadgeVariant = (status) => {
//     switch(status) {
//       case 'Pending Review':
//         return 'bg-yellow-100 text-yellow-800';
//       case 'Confirmed Fraud':
//         return 'bg-red-100 text-red-800';
//       case 'Resolved':
//         return 'bg-green-100 text-green-800';
//       default:
//         return 'bg-gray-100 text-gray-800';
//     }
//   };

//   // Fraud type badge styling
//   const getFraudTypeBadge = (type) => {
//     switch(type) {
//       case 'Card Fraud':
//         return 'bg-red-100 text-red-800';
//       case 'Identity Theft':
//         return 'bg-orange-100 text-orange-800';
//       case 'Phishing':
//         return 'bg-blue-100 text-blue-800';
//       default:
//         return 'bg-gray-100 text-gray-800';
//     }
//   };
  
//   return (
//     <Card className="shadow-sm border border-gray-100 mb-6">
//       <CardHeader className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
//         <CardTitle className="text-lg font-heading font-semibold text-gray-800">Recent Fraud Alerts</CardTitle>
//         <Button variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors">
//           View All
//         </Button>
//       </CardHeader>
//       <div className="overflow-x-auto">
//         <Table>
//           <TableHeader className="bg-gray-50">
//             <TableRow>
//               <TableHead className="whitespace-nowrap">Transaction ID</TableHead>
//               <TableHead className="whitespace-nowrap">Customer</TableHead>
//               <TableHead className="whitespace-nowrap">Amount</TableHead>
//               <TableHead className="whitespace-nowrap">Fraud Type</TableHead>
//               <TableHead className="whitespace-nowrap">Date</TableHead>
//               <TableHead className="whitespace-nowrap">Status</TableHead>
//               <TableHead className="whitespace-nowrap text-right">Action</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {recentFraudAlerts.map((alert) => (
//               <TableRow key={alert.id} className="hover:bg-gray-50">
//                 <TableCell className="font-mono text-sm text-gray-900">
//                   {alert.transactionId}
//                 </TableCell>
//                 <TableCell>
//                   <div className="flex items-center">
//                     <div className={`h-8 w-8 rounded-full ${alert.avatarBg} flex items-center justify-center`}>
//                       <span className="font-medium text-indigo-700">{alert.avatarInitials}</span>
//                     </div>
//                     <div className="ml-3">
//                       <p className="text-sm font-medium text-gray-900">{alert.customerName}</p>
//                       <p className="text-xs text-gray-500">Account #{alert.accountNumber}</p>
//                     </div>
//                   </div>
//                 </TableCell>
//                 <TableCell className="whitespace-nowrap">
//                   <span className="text-sm font-medium font-mono text-gray-900">
//                     {formatCurrency(alert.amount)}
//                   </span>
//                 </TableCell>
//                 <TableCell>
//                   <Badge className={getFraudTypeBadge(alert.fraudType)} variant="outline">
//                     {alert.fraudType}
//                   </Badge>
//                 </TableCell>
//                 <TableCell className="whitespace-nowrap text-sm text-gray-500">
//                   {formatDate(alert.date)}
//                 </TableCell>
//                 <TableCell>
//                   <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getBadgeVariant(alert.status)}`}>
//                     <span
//                       className={`w-1.5 h-1.5 mr-1.5 rounded-full ${
//                         alert.status === 'Pending Review' ? 'bg-yellow-600' :
//                         alert.status === 'Confirmed Fraud' ? 'bg-red-600' : 'bg-green-600'
//                       }`}
//                     ></span>
//                     {alert.status}
//                   </div>
//                 </TableCell>
//                 <TableCell className="whitespace-nowrap text-right text-sm font-medium">
//                   <button className="text-blue-600 hover:text-blue-900 mr-3">
//                     {alert.status === 'Resolved' ? 'Details' : 'Review'}
//                   </button>
//                   <button
//                     className={
//                       alert.status === 'Resolved'
//                         ? 'text-gray-600 hover:text-gray-900'
//                         : 'text-red-600 hover:text-red-900'
//                     }
//                   >
//                     {alert.status === 'Resolved' ? 'Archive' : 'Block'}
//                   </button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </div>
//       <CardFooter className="px-5 py-3 flex items-center justify-between border-t border-gray-200">
//         <div>
//           <p className="text-sm text-gray-700">
//             Showing <span className="font-medium">1</span> to <span className="font-medium">3</span> of <span className="font-medium">28</span> results
//           </p>
//         </div>
//         <div className="flex space-x-1">
//           <Button 
//             variant="outline" 
//             size="sm"
//             onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
//             disabled={currentPage === 1}
//             className="rounded-l-md"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-4 w-4"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <polyline points="15 18 9 12 15 6"></polyline>
//             </svg>
//           </Button>
//           {[...Array(totalPages)].map((_, i) => (
//             <Button 
//               key={i}
//               variant={currentPage === i + 1 ? "default" : "outline"}
//               size="sm"
//               onClick={() => setCurrentPage(i + 1)}
//               className={currentPage === i + 1 ? "bg-blue-50 text-blue-700" : ""}
//             >
//               {i + 1}
//             </Button>
//           ))}
//           <Button 
//             variant="outline" 
//             size="sm"
//             onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
//             disabled={currentPage === totalPages}
//             className="rounded-r-md"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-4 w-4"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <polyline points="9 18 15 12 9 6"></polyline>
//             </svg>
//           </Button>
//         </div>
//       </CardFooter>
//     </Card>
//   );
// }

import { useState, useContext } from 'react';
import { AdminDataContext } from '@/components/Context/AdminContext';
import { Card, CardHeader, CardTitle, CardFooter } from "@/components/Dashboard/ui/Card";
import { Button } from "@/components/Dashboard/ui/button";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/Dashboard/ui/table";
import { Badge } from "@/components/Dashboard/ui/badge";
import { formatCurrency, formatDate } from '@/components/lib/util';

export default function RecentFraudTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const { transactions = [] } = useContext(AdminDataContext);

  // Filter only fraudulent transactions
  const fraudTransactions = transactions.filter(tx => tx.is_fraud === 1 || tx.is_fraud === "1");

  // Pagination logic (optional, adjust as needed)
  const itemsPerPage = 10;
  const totalPages = Math.ceil(fraudTransactions.length / itemsPerPage);
  const paginated = fraudTransactions.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // ...badge helpers as before...

  return (
    <Card className="shadow-sm border border-gray-100 mb-6">
      <CardHeader className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
        <CardTitle className="text-lg font-heading font-semibold text-gray-800">Recent Fraud Alerts</CardTitle>
        <Button variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors">
          View All
        </Button>
      </CardHeader>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead>Transaction ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginated.map((tx) => (
              <TableRow key={tx._id}>
                <TableCell>{tx._id}</TableCell>
                <TableCell>{tx.first} {tx.last}</TableCell>
                <TableCell>{formatCurrency(tx.amt)}</TableCell>
                <TableCell>{formatDate(tx.trans_date_trans_time)}</TableCell>
                <TableCell>
                  <Badge className="bg-red-100 text-red-800" variant="outline">
                    Fraud
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <CardFooter className="px-5 py-3 flex items-center justify-between border-t border-gray-200">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{(currentPage - 1) * itemsPerPage + 1}</span>
            {" "}to <span className="font-medium">{Math.min(currentPage * itemsPerPage, fraudTransactions.length)}</span>
            {" "}of <span className="font-medium">{fraudTransactions.length}</span> results
          </p>
        </div>
        <div className="flex space-x-1">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="rounded-l-md"
          >
            Prev
          </Button>
          {[...Array(totalPages)].map((_, i) => (
            <Button 
              key={i}
              variant={currentPage === i + 1 ? "default" : "outline"}
              size="sm"
              onClick={() => setCurrentPage(i + 1)}
              className={currentPage === i + 1 ? "bg-blue-50 text-blue-700" : ""}
            >
              {i + 1}
            </Button>
          ))}
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="rounded-r-md"
          >
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}