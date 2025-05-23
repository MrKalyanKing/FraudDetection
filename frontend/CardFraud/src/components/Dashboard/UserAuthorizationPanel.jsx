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
// import { Checkbox } from "@/components/Dashboard/ui/checkbox";
// import { Badge } from "@/components/Dashboard/ui/badge";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/Dashboard/ui/select";
// import { authorizationRequests } from '@/components/data/mockData';


//  const { url, userRequests, setUserRequests } = useContext(AdminDataContext);

//   const handleApproveUser = async (userId) => {
//     const token = localStorage.getItem('adminToken');
//     try {
//       const res = await axios.put(
//         `${url}/admin/approve-account/${userId}`,
//         { status: "approved" },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       toast.success(res.data.message || "User approved!");
//       // Remove approved user from the list
//       setUserRequests(prev => prev.filter(user => user._id !== userId));
//     } catch (err) {
//       toast.error(
//         err.response?.data?.message || "Approval failed. Please try again."
//       );
//     }
//   };

// export default function UserAuthorizationPanel() {
//   return (
//     <Card className="shadow-sm border border-gray-100 mb-6">
//       <CardHeader className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
//         <CardTitle className="text-lg font-heading font-semibold text-gray-800">New User Authorizations</CardTitle>
//         <div className="flex space-x-2">
//           <Select defaultValue="all">
//             <SelectTrigger className="w-[150px]">
//               <SelectValue placeholder="All Types" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="all">All Types</SelectItem>
//               <SelectItem value="account">Account Opening</SelectItem>
//               <SelectItem value="service">Service Activation</SelectItem>
//             </SelectContent>
//           </Select>
//           <Button className="bg-blue-600 text-white hover:bg-blue-700 transition-colors">
//             Authorize All
//           </Button>
//         </div>
//       </CardHeader>
//       <div className="overflow-x-auto">
//         <Table>
//           <TableHeader className="bg-gray-50">
//             <TableRow>
//               <TableHead className="w-[40px]">
//                 <Checkbox />
//               </TableHead>
//               <TableHead>Name</TableHead>
//               <TableHead>Type</TableHead>
//               <TableHead>Application Date</TableHead>
//               <TableHead>KYC Status</TableHead>
//               <TableHead>Risk Score</TableHead>
//               <TableHead className="text-right">Action</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {authorizationRequests.map((request) => (
//               <TableRow key={request.id} className="hover:bg-gray-50">
//                 <TableCell>
//                   <Checkbox />
//                 </TableCell>
//                 <TableCell>
//                   <div className="flex items-center">
//                     <div className={`h-8 w-8 rounded-full ${request.avatarBg} flex items-center justify-center`}>
//                       <span className="font-medium text-teal-700">{request.avatarInitials}</span>
//                     </div>
//                     <div className="ml-3">
//                       <p className="text-sm font-medium text-gray-900">{request.name}</p>
//                       <p className="text-xs text-gray-500">{request.email}</p>
//                     </div>
//                   </div>
//                 </TableCell>
//                 <TableCell>
//                   <Badge 
//                     className={
//                       request.type === 'New Account' ? 'bg-blue-100 text-blue-800' : 
//                       request.type === 'Credit Card' ? 'bg-purple-100 text-purple-800' : 
//                       'bg-green-100 text-green-800'
//                     } 
//                     variant="outline"
//                   >
//                     {request.type}
//                   </Badge>
//                 </TableCell>
//                 <TableCell className="whitespace-nowrap text-sm text-gray-500">
//                   {new Date(request.date).toLocaleDateString('en-US', { 
//                     month: 'long', 
//                     day: 'numeric', 
//                     year: 'numeric'
//                   })}
//                 </TableCell>
//                 <TableCell>
//                   <Badge 
//                     className={
//                       request.kycStatus === 'Verified' ? 'bg-green-100 text-green-800' : 
//                       request.kycStatus === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
//                       'bg-red-100 text-red-800'
//                     } 
//                     variant="outline"
//                   >
//                     {request.kycStatus}
//                   </Badge>
//                 </TableCell>
//                 <TableCell>
//                   <div className="flex items-center">
//                     <span
//                       className={`text-sm font-medium ${
//                         request.riskScore === 'Low' ? 'text-green-700' : 
//                         request.riskScore === 'Medium' ? 'text-yellow-700' : 
//                         'text-red-700'
//                       }`}
//                     >
//                       {request.riskScore}
//                     </span>
//                     <div className="ml-2 w-16 bg-gray-200 rounded-full h-2">
//                       <div 
//                         className={`h-2 rounded-full ${
//                           request.riskScore === 'Low' ? 'bg-green-500' : 
//                           request.riskScore === 'Medium' ? 'bg-yellow-500' : 
//                           'bg-red-500'
//                         }`}
//                         style={{ width: `${request.riskPercentage}%` }}
//                       ></div>
//                     </div>
//                   </div>
//                 </TableCell>
//                 <TableCell className="whitespace-nowrap text-right text-sm font-medium">
//                   <button className="text-blue-600 hover:text-blue-900 mr-3">Review</button>
//                   <button onClick={()=>handleApproveUser(user._id)} className="text-green-600 hover:text-green-900">Approve</button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </div>
//       <CardFooter className="px-5 py-3 border-t border-gray-200">
//         <Button variant="outline" className="w-full">
//           View All Authorization Requests
//         </Button>
//       </CardFooter>
//     </Card>
//   );
// }

import { useContext } from "react";
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
import { Checkbox } from "@/components/Dashboard/ui/checkbox";
import { Badge } from "@/components/Dashboard/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/Dashboard/ui/select";
import { AdminDataContext } from "../Context/AdminContext";
import axios from "axios";
import { toast } from "react-toastify";

export default function UserAuthorizationPanel() {
  const { url, userRequests, setUserRequests } = useContext(AdminDataContext);

  
  
  const handleApproveUser = async (userId) => {
    const token = localStorage.getItem('adminToken');
    try {
      const res = await axios.put(
        `${url}/admin/approve-account/${userId}`,
        { status: "approved" },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success(res.data.message || "User approved!");
      setUserRequests(prev => prev.filter(user => user._id !== userId));
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Approval failed. Please try again."
      );
    }
  };

  return (
    <Card className="shadow-sm border border-gray-100 mb-6">
      <CardHeader className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
        <CardTitle className="text-lg font-heading font-semibold text-gray-800">New User Authorizations</CardTitle>
        <div className="flex space-x-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="All Types" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="account">Account Opening</SelectItem>
              <SelectItem value="service">Service Activation</SelectItem>
            </SelectContent>
          </Select>
          <Button className="bg-blue-600 text-white hover:bg-blue-700 transition-colors">
            Authorize All
          </Button>
        </div>
      </CardHeader>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead className="w-[40px]">
                <Checkbox />
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Application Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {userRequests.map((user) => (
              <TableRow key={user._id} className="hover:bg-gray-50">
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">{user.first} {user.last}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <p className="text-xs text-gray-500">{user.email}</p>
                </TableCell>
                <TableCell className="whitespace-nowrap text-sm text-gray-500">
                  {user.createdAt ? new Date(user.createdAt).toLocaleDateString('en-US', { 
                    month: 'long', 
                    day: 'numeric', 
                    year: 'numeric'
                  }) : "N/A"}
                </TableCell>
                <TableCell>
                  <Badge 
                    className={
                      user.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 
                      user.status === 'approved' ? 'bg-green-100 text-green-800' : 
                      'bg-red-100 text-red-800'
                    } 
                    variant="outline"
                  >
                    {user.status}
                  </Badge>
                </TableCell>
                <TableCell className="whitespace-nowrap text-right text-sm font-medium">
                  <button onClick={() => handleApproveUser(user._id)} className="text-green-600 hover:text-green-900">Approve</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <CardFooter className="px-5 py-3 border-t border-gray-200">
        <Button variant="outline" className="w-full">
          View All Authorization Requests
        </Button>
      </CardFooter>
    </Card>
  );
}