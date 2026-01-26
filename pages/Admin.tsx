import React, { useState, useEffect } from 'react';
import {
    Lock,
    Users,
    ShoppingBag,
    TrendingUp,
    ArrowRight,
    Search,
    FileText,
    ChevronRight,
    RefreshCw,
    LogOut,
    Calendar,
    CreditCard,
    MapPin,
    Mail
} from 'lucide-react';

interface OrderItem {
    description: string;
    quantity: number;
    amount: number;
}

interface Order {
    id: string;
    orderDate: string;
    customerName: string;
    customerEmail: string;
    amount: number;
    currency: string;
    items: OrderItem[];
    shippingAddress: string;
    status: string;
}

const Admin: React.FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [orders, setOrders] = useState<Order[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (username === 'admin' && password === 'admin') {
            setIsAuthenticated(true);
            setError('');
            fetchOrders();
        } else {
            setError('Invalid credentials');
        }
    };

    const fetchOrders = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('/api/orders', {
                headers: {
                    'x-admin-password': 'admin'
                }
            });
            const data = await response.json();
            if (data.orders) {
                setOrders(data.orders);
            }
        } catch (err) {
            console.error('Error fetching orders:', err);
        } finally {
            setIsLoading(false);
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-obsidian flex items-center justify-center px-6 pt-20">
                <div className="max-w-md w-full relative">
                    <div className="absolute -top-24 -left-24 w-64 h-64 bg-scarlet/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-scarlet/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

                    <div className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-xl relative z-10">
                        <div className="w-16 h-16 bg-scarlet rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl rotate-3">
                            <Lock className="w-8 h-8 text-white -rotate-3" />
                        </div>

                        <h2 className="text-3xl font-black text-white text-center mb-2 tracking-tighter uppercase italic">Admin Access</h2>
                        <p className="text-steel text-center mb-8 font-medium">Please enter your credentials</p>

                        <form onSubmit={handleLogin} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-white/40 uppercase tracking-[2px] ml-2">Username</label>
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    placeholder="Enter username"
                                    className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl outline-none text-white text-sm focus:border-scarlet/50 transition-all font-medium"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-white/40 uppercase tracking-[2px] ml-2">Password</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter password"
                                    className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl outline-none text-white text-sm focus:border-scarlet/50 transition-all font-medium"
                                />
                            </div>

                            {error && <p className="text-scarlet text-xs font-bold text-center mt-2 uppercase tracking-wide">{error}</p>}

                            <button type="submit" className="w-full bg-scarlet hover:bg-[#B91C1C] text-white p-5 rounded-2xl font-black uppercase tracking-widest text-sm transition-all shadow-[0_10px_30px_-10px_rgba(220,38,38,0.5)] active:scale-[0.98]">
                                Authenticate
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    const filteredOrders = orders.filter(order =>
        order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.customerEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.id.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalRevenue = orders.reduce((sum, order) => sum + order.amount, 0);

    return (
        <div className="min-h-screen bg-obsidian pt-24 pb-20 px-6 sm:px-10">
            <div className="max-w-[1400px] mx-auto space-y-10">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="space-y-2">
                        <div className="flex items-center gap-3 text-scarlet font-black tracking-[4px] uppercase text-xs">
                            <span className="w-8 h-[2px] bg-scarlet"></span>
                            Control Center
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter italic">Dashboard</h1>
                    </div>

                    <button
                        onClick={() => setIsAuthenticated(false)}
                        className="flex items-center gap-3 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-all group"
                    >
                        Logout
                        <LogOut className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white/5 border border-white/10 p-8 rounded-3xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-all">
                            <ShoppingBag size={80} strokeWidth={1} />
                        </div>
                        <div className="relative z-10 space-y-4">
                            <p className="text-xs font-bold text-white/40 uppercase tracking-widest">Total Orders</p>
                            <h3 className="text-4xl font-black text-white">{orders.length}</h3>
                            <div className="flex items-center gap-2 text-green-500 text-xs font-bold">
                                <TrendingUp className="w-4 h-4" />
                                +12.5% this month
                            </div>
                        </div>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-8 rounded-3xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-all text-scarlet">
                            <TrendingUp size={80} strokeWidth={1} />
                        </div>
                        <div className="relative z-10 space-y-4">
                            <p className="text-xs font-bold text-white/40 uppercase tracking-widest">Revenue (GBP)</p>
                            <h3 className="text-4xl font-black text-white">£{totalRevenue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h3>
                            <div className="flex items-center gap-2 text-green-500 text-xs font-bold">
                                <TrendingUp className="w-4 h-4" />
                                +8.2% vs last period
                            </div>
                        </div>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-8 rounded-3xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-all">
                            <Users size={80} strokeWidth={1} />
                        </div>
                        <div className="relative z-10 space-y-4">
                            <p className="text-xs font-bold text-white/40 uppercase tracking-widest">Unique Customers</p>
                            <h3 className="text-4xl font-black text-white">{new Set(orders.map(o => o.customerEmail)).size}</h3>
                            <div className="flex items-center gap-2 text-green-500 text-xs font-bold">
                                <ArrowRight className="w-4 h-4" />
                                Growing daily
                            </div>
                        </div>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-8 rounded-3xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-all text-scarlet">
                            <FileText size={80} strokeWidth={1} />
                        </div>
                        <div className="relative z-10 space-y-4">
                            <p className="text-xs font-bold text-white/40 uppercase tracking-widest">Active Plans</p>
                            <h3 className="text-4xl font-black text-white">{orders.filter(o => o.items.some(i => i.description.toLowerCase().includes('plan'))).length}</h3>
                            <div className="flex items-center gap-2 text-steel text-xs font-bold">
                                Training & Coaching
                            </div>
                        </div>
                    </div>
                </div>

                {/* Orders List Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    <div className="lg:col-span-2 space-y-6">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md">
                            <div className="relative flex-grow max-w-md w-full">
                                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    placeholder="Search by name, email or order ID..."
                                    className="w-full bg-white/5 border border-white/10 p-4 pl-14 rounded-xl outline-none text-white text-sm focus:border-scarlet/50 transition-all font-medium"
                                />
                            </div>
                            <button
                                onClick={fetchOrders}
                                className="flex items-center gap-3 px-6 py-4 bg-scarlet rounded-xl text-white font-bold uppercase tracking-widest text-xs hover:bg-[#B91C1C] transition-all disabled:opacity-50"
                                disabled={isLoading}
                            >
                                <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
                                Refresh
                            </button>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-md">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="bg-white/5 border-b border-white/10">
                                            <th className="px-8 py-6 text-[10px] font-black text-white/40 uppercase tracking-widest">Order Details</th>
                                            <th className="px-8 py-6 text-[10px] font-black text-white/40 uppercase tracking-widest">Customer</th>
                                            <th className="px-8 py-6 text-[10px] font-black text-white/40 uppercase tracking-widest">Amount</th>
                                            <th className="px-8 py-6 text-[10px] font-black text-white/40 uppercase tracking-widest">Status</th>
                                            <th className="px-8 py-6 text-[10px] font-black text-white/40 uppercase tracking-widest text-right">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5">
                                        {filteredOrders.length > 0 ? filteredOrders.map((order) => (
                                            <tr
                                                key={order.id}
                                                className={`hover:bg-white/5 transition-colors cursor-pointer ${selectedOrder?.id === order.id ? 'bg-white/10' : ''}`}
                                                onClick={() => setSelectedOrder(order)}
                                            >
                                                <td className="px-8 py-6">
                                                    <div className="font-bold text-white mb-1 truncate max-w-[150px]">{order.id}</div>
                                                    <div className="text-[10px] text-white/40 font-bold uppercase">{new Date(order.orderDate).toLocaleDateString()}</div>
                                                </td>
                                                <td className="px-8 py-6">
                                                    <div className="font-bold text-white mb-1">{order.customerName}</div>
                                                    <div className="text-[10px] text-scarlet font-bold uppercase truncate max-w-[200px]">{order.customerEmail}</div>
                                                </td>
                                                <td className="px-8 py-6 font-black text-white">
                                                    £{order.amount.toFixed(2)}
                                                </td>
                                                <td className="px-8 py-6">
                                                    <span className={`px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${order.status === 'paid' ? 'bg-green-500/10 text-green-500 border border-green-500/20' : 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20'
                                                        }`}>
                                                        {order.status}
                                                    </span>
                                                </td>
                                                <td className="px-8 py-6 text-right">
                                                    <button className="p-3 bg-white/5 rounded-xl hover:bg-scarlet transition-all group">
                                                        <ChevronRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                                                    </button>
                                                </td>
                                            </tr>
                                        )) : (
                                            <tr>
                                                <td colSpan={5} className="px-8 py-20 text-center text-steel font-medium">
                                                    {isLoading ? 'Fetching the latest data...' : 'No orders found matching your search.'}
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Order Details Sidebar */}
                    <div className="lg:col-span-1">
                        {selectedOrder ? (
                            <div className="bg-white/10 border-2 border-scarlet/30 p-8 rounded-[40px] sticky top-28 backdrop-blur-2xl space-y-8 animate-in fade-in slide-in-from-right-10">
                                <div className="space-y-4">
                                    <div className="flex justify-between items-start">
                                        <div className="w-16 h-16 bg-scarlet rounded-2xl flex items-center justify-center shadow-xl">
                                            <ShoppingBag className="w-8 h-8 text-white" />
                                        </div>
                                        <div className="text-right">
                                            <p className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-1">Status</p>
                                            <span className="px-4 py-2 bg-green-500/20 text-green-500 border border-green-500/30 rounded-xl text-xs font-black uppercase tracking-tighter">
                                                SUCCESSFUL
                                            </span>
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Order Details</h3>
                                    <p className="text-xs text-white/40 font-mono break-all">{selectedOrder.id}</p>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-scarlet/30 transition-all">
                                        <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                                            <Users size={18} className="text-scarlet" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-1">Customer</p>
                                            <p className="text-sm font-bold text-white">{selectedOrder.customerName}</p>
                                            <p className="text-xs text-scarlet font-medium">{selectedOrder.customerEmail}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                                        <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                                            <Calendar size={18} className="text-scarlet" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-1">Date & Time</p>
                                            <p className="text-sm font-bold text-white">
                                                {new Date(selectedOrder.orderDate).toLocaleString(undefined, {
                                                    dateStyle: 'medium',
                                                    timeStyle: 'short'
                                                })}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                                        <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                                            <MapPin size={18} className="text-scarlet" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-1">Shipping Info</p>
                                            <p className="text-xs font-medium text-steel leading-relaxed">
                                                {selectedOrder.shippingAddress}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4 pt-4 border-t border-white/10">
                                    <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">Purchased Items</p>
                                    <div className="max-h-40 overflow-y-auto space-y-3 pr-2 scrollbar-thin">
                                        {selectedOrder.items.map((item, idx) => (
                                            <div key={idx} className="flex justify-between items-center text-sm">
                                                <div className="flex items-start gap-2">
                                                    <span className="text-scarlet font-black">{item.quantity}x</span>
                                                    <span className="text-white font-medium truncate max-w-[150px]">{item.description}</span>
                                                </div>
                                                <span className="text-white font-black whitespace-nowrap">£{item.amount.toFixed(2)}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-8 border-t border-white/20">
                                    <div className="flex justify-between items-center mb-6">
                                        <div className="text-right">
                                            <p className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-1 text-left">Total Paid</p>
                                            <h4 className="text-4xl font-black text-white">£{selectedOrder.amount.toFixed(2)}</h4>
                                        </div>
                                        <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                                            <CreditCard className="text-scarlet" size={20} />
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => {
                                            // Optional: Implementation for printing receipt or sending manual confirmation
                                            window.print();
                                        }}
                                        className="w-full bg-white text-black p-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-[#E2E8F0] transition-all flex items-center justify-center gap-3"
                                    >
                                        <FileText size={16} />
                                        Export Order
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="bg-white/5 border border-white/10 border-dashed p-10 py-20 rounded-[40px] text-center flex flex-col items-center justify-center space-y-6">
                                <div className="w-20 h-20 bg-white/5 rounded-[30px] flex items-center justify-center animate-bounce">
                                    <ChevronRight className="w-10 h-10 text-white/10 -rotate-90" />
                                </div>
                                <div className="space-y-2">
                                    <p className="text-white font-bold uppercase tracking-widest text-sm italic">Selection Required</p>
                                    <p className="text-steel text-xs font-medium max-w-[200px]">Select an order from the list to view detailed customer and purchase information.</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;
