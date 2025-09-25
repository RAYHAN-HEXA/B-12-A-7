import { Calendar } from "lucide-react";


const Cart = () => {
    return (


<div className=" flex ">
<div className="max-w-xl border border-gray-200 rounded-xl shadow-sm p-5 bg-white hover:shadow-md transition">
      {/* Title + Status */}
      <div className="flex items-start justify-between">
        <h2 className="text-lg font-semibold text-gray-900">
          Login Issues - Can't Access Account
        </h2>
        <span className="flex items-center gap-1 bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          Open
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 mt-2 leading-relaxed">
        Customer is unable to log in to their account. They've tried resetting
        their password multiple times but still...
      </p>

      {/* Footer Info */}
      <div className="flex items-center justify-between mt-4 text-sm">
        <div className="flex items-center gap-3">
          <span className="text-gray-500">#1001</span>
          <span className="text-red-600 font-semibold">HIGH PRIORITY</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <span>John Smith</span>
          <Calendar size={16} />
          <span>1/15/2024</span>
        </div>
      </div>
    </div>
<div className=' right-side '>
<h4>Task Status</h4>
<p>Select a ticket to add to Task Status</p>
<h4>Resolved Task</h4>
<p>No resolved tasks yet.</p>
</div>
           
 </div>


 
)
}
 


export default Cart;