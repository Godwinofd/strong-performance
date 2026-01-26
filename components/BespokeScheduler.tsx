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
        <div className="bg-black rounded-[40px] overflow-hidden shadow-[0_0_50px_-12px_rgba(220,38,38,0.3)] min-h-[500px] flex flex-col relative w-full border border-white/10">
            {/* Header */}
            <div className="p-6 md:p-8 bg-black border-b border-white/10 flex justify-between items-center text-white">
                <div>
                    <h3 className="text-xl font-black uppercase tracking-tighter">Performance Call</h3>
                    <div className="flex items-center gap-2 text-scarlet text-xs font-bold uppercase tracking-widest mt-1">
                        <Clock className="w-3 h-3" />
                        15 Minutes • Google Meet
                    </div>
                </div>
                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                    <Video className="w-5 h-5 text-white" />
                </div>
            </div>

            <div className="flex-grow bg-black p-4 md:p-6">

                {view === 'calendar' && (
                    <div className="animate-in fade-in slide-in-from-right-4 duration-500 h-full flex flex-col items-center bg-obsidian text-white">
                        <div className="w-full flex justify-between items-center mb-6 px-4 pt-4">
                            <h4 className="text-xl font-black uppercase tracking-tight">
                                {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
                            </h4>
                            <div className="flex gap-2">
                                <button type="button" onClick={prevMonth} className="p-2 hover:bg-white/10 rounded-full transition-colors"><ChevronLeft className="w-5 h-5 text-white" /></button>
                                <button type="button" onClick={nextMonth} className="p-2 hover:bg-white/10 rounded-full transition-colors"><ChevronRight className="w-5 h-5 text-white" /></button>
                            </div>
                        </div>

                        <div className="w-full max-w-sm px-4">
                            <div className="grid grid-cols-7 mb-2 text-center">
                                {weekDays.map(day => (
                                    <div key={day} className="text-[9px] font-black text-white/50 uppercase tracking-widest py-2">{day}</div>
                                ))}
                            </div>

                            <div className="grid grid-cols-7 gap-1 auto-rows-fr">
                                {/* Empty cells for start of month */}
                                {Array.from({ length: new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay() }).map((_, i) => (
                                    <div key={`empty-${i}`} className="w-full aspect-square"></div>
                                ))}

                                {days.map((date, i) => {
                                    const isToday = new Date().toDateString() === date.toDateString();
                                    const isPast = date < new Date() && !isToday;
                                    const isSelected = selectedDate?.toDateString() === date.toDateString();

                                    return (
                                        <button
                                            key={i}
                                            disabled={isPast}
                                            onClick={() => handleDateSelect(date)}
                                            className={`
                                                w-full aspect-square rounded-full flex items-center justify-center text-sm font-bold transition-all relative
                                                ${isSelected
                                                    ? 'bg-scarlet text-white shadow-lg scale-110 z-10'
                                                    : 'text-white hover:bg-white/10'}
                                                ${isToday && !isSelected ? 'text-scarlet border-2 border-scarlet/50' : ''}
                                                ${isPast ? 'opacity-20 cursor-not-allowed hover:bg-transparent' : ''}
                                            `}
                                        >
                                            <span className="relative z-10">{date.getDate()}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                )}

                {view === 'time' && (
                    <div className="h-full flex flex-col animate-in fade-in slide-in-from-right-4 duration-500">
                        <button onClick={() => setView('calendar')} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 mb-6 hover:text-obsidian transition-colors">
                            <ChevronLeft className="w-4 h-4" /> Back to Calendar
                        </button>
                        <h4 className="text-2xl font-black text-obsidian uppercase tracking-tight mb-2">Select Time</h4>
                        <p className="text-sm font-medium text-gray-500 mb-8">{selectedDate?.toDateString()}</p>

                        <div className="grid grid-cols-2 gap-4 overflow-y-auto max-h-[400px] pr-2">
                            {timeSlots.map((time) => (
                                <button
                                    key={time}
                                    onClick={() => handleTimeSelect(time)}
                                    className="p-4 border border-gray-200 rounded-xl text-obsidian font-bold text-lg hover:border-scarlet hover:text-scarlet hover:bg-scarlet/5 transition-all text-center"
                                >
                                    {time}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {view === 'form' && (
                    <div className="h-full flex flex-col animate-in fade-in slide-in-from-right-4 duration-500">
                        <button onClick={() => setView('time')} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 mb-6 hover:text-obsidian transition-colors">
                            <ChevronLeft className="w-4 h-4" /> Back to Times
                        </button>

                        <div className="mb-8 p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-between">
                            <div>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Your Slot</p>
                                <p className="text-lg font-black text-obsidian">{selectedDate?.toLocaleDateString()} at {selectedTime}</p>
                            </div>
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-gray-200">
                                <CalendarIcon className="w-5 h-5 text-scarlet" />
                            </div>
                        </div>

                        <form onSubmit={handleBookingSubmit} className="space-y-4">
                            <div>
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1 mb-1 block">Full Name</label>
                                <input required type="text" className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl font-bold text-obsidian outline-none focus:border-scarlet focus:ring-1 focus:ring-scarlet transition-all" placeholder="Enter your name" />
                            </div>
                            <div>
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1 mb-1 block">Email Address</label>
                                <input required type="email" className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl font-bold text-obsidian outline-none focus:border-scarlet focus:ring-1 focus:ring-scarlet transition-all" placeholder="Enter your email" />
                            </div>
                            <div>
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1 mb-1 block">Training Goals</label>
                                <textarea rows={3} className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl font-bold text-obsidian outline-none focus:border-scarlet focus:ring-1 focus:ring-scarlet transition-all resize-none" placeholder="What are you looking to achieve?"></textarea>
                            </div>

                            <button type="submit" className="w-full bg-scarlet text-white py-5 rounded-xl font-black uppercase tracking-widest shadow-xl hover:bg-black transition-all mt-4">
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
        </div>
    );
};

export default BespokeScheduler;
