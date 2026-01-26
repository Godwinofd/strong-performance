import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Clock, Video, Calendar as CalendarIcon, CheckCircle } from 'lucide-react';

const BespokeScheduler: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [view, setView] = useState<'calendar' | 'time' | 'form' | 'success'>('calendar');
    const [currentMonth, setCurrentMonth] = useState(new Date());

    // Mock available dates (next 14 days)
    const getDaysInMonth = (date: Date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const days = new Date(year, month + 1, 0).getDate();
        return Array.from({ length: days }, (_, i) => new Date(year, month, i + 1));
    };

    const days = getDaysInMonth(currentMonth);
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // Mock time slots
    const timeSlots = [
        '09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00'
    ];

    const handleDateSelect = (date: Date) => {
        setSelectedDate(date);
        setView('time');
    };

    const handleTimeSelect = (time: string) => {
        setSelectedTime(time);
        setView('form');
    };

    const handleBookingSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, send to backend here
        setTimeout(() => {
            setView('success');
        }, 1000);
    };

    const nextMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
    };

    const prevMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
    };

    return (
        <div className="bg-black rounded-[40px] overflow-hidden shadow-[0_0_50px_-12px_rgba(220,38,38,0.3)] min-h-[600px] flex flex-col relative w-full border border-white/10">

// ... (Header remains same)

            // ... (Calendar View remains same)

            {view === 'form' && (
                <div className="h-full flex flex-col animate-in fade-in slide-in-from-right-4 duration-500 bg-obsidian p-6">
                    <button onClick={() => setView('time')} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/50 mb-6 hover:text-white transition-colors">
                        <ChevronLeft className="w-4 h-4" /> Back to Times
                    </button>

                    <div className="mb-8 p-4 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-between">
                        <div>
                            <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">Your Slot</p>
                            <p className="text-lg font-black text-white">{selectedDate?.toLocaleDateString()} at {selectedTime}</p>
                        </div>
                        <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center border border-white/10">
                            <CalendarIcon className="w-5 h-5 text-scarlet" />
                        </div>
                    </div>

                    <form onSubmit={handleBookingSubmit} className="space-y-4">
                        <div>
                            <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1 mb-1 block">Full Name</label>
                            <input required type="text" className="w-full bg-white/10 border border-white/10 p-4 rounded-xl font-bold text-white outline-none focus:border-scarlet focus:ring-1 focus:ring-scarlet transition-all placeholder:text-white/20" placeholder="Enter your name" />
                        </div>
                        <div>
                            <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1 mb-1 block">Email Address</label>
                            <input required type="email" className="w-full bg-white/10 border border-white/10 p-4 rounded-xl font-bold text-white outline-none focus:border-scarlet focus:ring-1 focus:ring-scarlet transition-all placeholder:text-white/20" placeholder="Enter your email" />
                        </div>
                        <div>
                            <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-1 mb-1 block">Training Goals</label>
                            <textarea rows={3} className="w-full bg-white/10 border border-white/10 p-4 rounded-xl font-bold text-white outline-none focus:border-scarlet focus:ring-1 focus:ring-scarlet transition-all resize-none placeholder:text-white/20" placeholder="What are you looking to achieve?"></textarea>
                        </div>

                        <button type="submit" className="w-full bg-scarlet text-white py-5 rounded-xl font-black uppercase tracking-widest shadow-xl hover:bg-white hover:text-black transition-all mt-4">
                            Confirm Booking
                        </button>
                    </form>
                </div>
            )}

            {view === 'success' && (
                <div className="h-full flex flex-col items-center justify-center text-center animate-in zoom-in duration-500 p-8">
                    <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center shadow-xl mb-8 animate-bounce">
                        <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-black text-obsidian uppercase tracking-tighter mb-4">Request Sent!</h3>
                    <p className="text-gray-500 font-medium mb-8 leading-relaxed max-w-xs">
                        We've received your request for <strong>{selectedDate?.toLocaleDateString()} at {selectedTime}</strong>.
                        <br /><br />
                        You will receive a Google Meet invitation shortly after we review details.
                    </p>
                    <button onClick={() => {
                        setView('calendar');
                        setSelectedDate(null);
                        setSelectedTime(null);
                    }} className="text-scarlet text-xs font-black uppercase tracking-widest hover:text-black transition-colors">
                        Make another booking
                    </button>
                </div>
            )}

        </div>
    );
};

export default BespokeScheduler;
