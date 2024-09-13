import { useState, useEffect, SetStateAction } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Step from "./Step";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

function createArray(N) {
  return [...Array(N).keys()].map((i) => i + 1);
}

const STORAGE = "carWashBooking";

const steps = createArray(3);

function Cwb() {
  const [step, setStep] = useState(1);
  const [selectedPackage, setSelectedPackage] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  useEffect(() => {
    const storedData = localStorage.getItem(STORAGE);
    if (storedData) {
      const { step, selectedPackage, selectedDate, selectedTime, name, phone } =
        JSON.parse(storedData);
      setStep(step);
      setSelectedPackage(selectedPackage);
      setSelectedDate(selectedDate);
      setSelectedTime(selectedTime);
      setName(name);
      setPhone(phone);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem(
      STORAGE,
      JSON.stringify({
        step,
        selectedPackage,
        selectedDate,
        selectedTime,
        name,
        phone,
      })
    );
  }, [step, selectedPackage, selectedDate, selectedTime, name, phone]);
  const handlePackageSelect = (pkg) => {
    setSelectedPackage(pkg);
    setStep(2);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setSelectedTime("");
  };
  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleContactInfoSubmit = () => {
    setStep(4);
  };
  const handleBookingReset = () => {
    setStep(1);
    setSelectedPackage("");
    setSelectedDate("");
    setSelectedTime("");
    setName("");
    setPhone("");

    localStorage.removeItem(STORAGE);
  };

  const handleBookingConfirm = () => {
    // Here you would typically send the booking data to your backend
    console.log("Booking confirmed:", {
      package: selectedPackage,
      date: selectedDate,
      time: selectedTime,
      name,
      phone,
    });
    setShowConfirmation(true);
  };

  const onDimiss = () => {
    setShowConfirmation(false);
    // Reset the form and local storage
    handleBookingReset();
  };

  return (
    <div className="max-w-md mx-auto p-4 space-y-6">
      {/* <div className="flex items-center gap-2 justify-center">
        <div
          className={`w-3 h-3 rounded-full ${
            step >= 1 ? "bg-primary" : "bg-muted"
          }`}
        />
        <div
          className={`w-3 h-3 rounded-full ${
            step >= 2 ? "bg-primary" : "bg-muted"
          }`}
        />
        <div
          className={`w-3 h-3 rounded-full ${
            step >= 3 ? "bg-primary" : "bg-muted"
          }`}
        />
        <div
          className={`w-3 h-3 rounded-full ${
            step === 4 ? "bg-primary" : "bg-muted"
          }`}
        />
      </div> */}
      <div className="flex justify-between rounded p-8">
        {steps.map((index) => (
          <Step key={index} id={index} currentStep={step} />
        ))}
      </div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Car Wash Booking</h1>
      </div>
      {step === 1 && (
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold">Select a Package</h2>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <Card
                className={`cursor-pointer transition-all ${
                  selectedPackage === "regular"
                    ? "bg-primary text-primary-foreground"
                    : "bg-background hover:bg-muted"
                }`}
                onClick={() => handlePackageSelect("regular")}
              >
                <CardContent className="space-y-2">
                  <h3 className="text-lg font-semibold">Regular</h3>
                  <p className="text-sm text-muted-foreground">
                    Basic car wash with exterior cleaning.
                  </p>
                  <div className="text-2xl font-bold">$15</div>
                </CardContent>
              </Card>
              <Card
                className={`cursor-pointer transition-all ${
                  selectedPackage === "premium"
                    ? "bg-primary text-primary-foreground"
                    : "bg-background hover:bg-muted"
                }`}
                onClick={() => handlePackageSelect("premium")}
              >
                <CardContent className="space-y-2">
                  <h3 className="text-lg font-semibold">Premium</h3>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive car wash with interior cleaning.
                  </p>
                  <div className="text-2xl font-bold">$25</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      )}
      {step === 2 && (
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold">Select Date and Time</h2>
            <div className="flex flex-col md:flex-row justify-between gap-3">
              <div className="mt-4">
                <Calendar
                  mode="single"
                  showOutsideDays={false}
                  disabled={(date) => {
                    const today = new Date();
                    today.setHours(0, 0, 0, 0); // Set time to midnight for accurate comparison
                    return date < today;
                  }}
                  selected={selectedDate}
                  onSelect={(date) => handleDateSelect(date)}
                  className="w-full"
                />
              </div>
              <div className="flex-1 mt-0 p-3 md:mt-4">
                <h2 className="text-lg font-semibold">Time Slots</h2>
                <TimeSlotsGenerator
                  date={new Date(selectedDate)}
                  startTime="07:00"
                  endTime="22:00"
                  slotDuration={120}
                  selectedTime={selectedTime}
                  handleTimeSelect={handleTimeSelect}
                />
                {/* <div className="grid grid-cols-2 md:grid-cols-1 gap-2 h-64 overflow-auto">
                  {[
                    "9:00 AM",
                    "10:00 AM",
                    "11:00 AM",
                    "12:00 PM",
                    "1:00 PM",
                    "2:00 PM",
                  ].map((time) => (
                    <Button
                      key={time}
                      variant={time === selectedTime ? "default" : "outline"}
                      className="w-full"
                      onClick={() => handleTimeSelect(time)}
                    >
                      {time}
                    </Button>
                  ))}
                </div> */}
              </div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="text-sm font-semibold">
                {selectedDate && selectedTime
                  ? `${selectedDate.toLocaleDateString("en-US", {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                    })}, ${selectedTime}`
                  : "Select a date and time"}
              </div>
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => setStep(1)}>
                  Back
                </Button>
                <Button
                  disabled={!selectedDate || !selectedTime}
                  onClick={() => setStep(3)}
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
      {step === 3 && (
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold">Enter Contact Information</h2>
            <div className="mt-4 space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="flex justify-between">
                <Button variant="outline" onClick={() => setStep(2)}>
                  Back
                </Button>
                <Button
                  disabled={!name || !phone}
                  onClick={handleContactInfoSubmit}
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
      {step === 4 && (
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold">Booking Summary</h2>
            <div className="mt-4 space-y-4">
              <div>
                <div className="font-semibold">Package</div>
                <div>{selectedPackage}</div>
              </div>
              <div>
                <div className="font-semibold">Date and Time</div>
                <div>
                  {selectedDate?.toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                  })}
                  , {selectedTime}
                </div>
              </div>
              <div>
                <div className="font-semibold">Contact Information</div>
                <div>
                  {name}, {phone}
                </div>
              </div>
              <div className="flex justify-between">
                <Button variant="outline" onClick={handleBookingReset}>
                  Start Over
                </Button>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={() => setStep(3)}>
                    Back
                  </Button>
                  <Button onClick={handleBookingConfirm}>
                    Confirm Booking
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent
          className="bg-white border border-gray-200 shadow-lg"
          onInteractOutside={(event) => event.preventDefault()}
          onEscapeKeyDown={(event) => event.preventDefault()}
        >
          <DialogHeader>
            <DialogTitle>Booking Confirmed!</DialogTitle>
            <DialogDescription>
              Congratulations! Your booking has been received. We'll contact you
              shortly with more details.
            </DialogDescription>
          </DialogHeader>
          <Button onClick={onDimiss}>Close</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
export default Cwb;

const TimeSlotsGenerator = ({
  date,
  startTime = "09:00",
  endTime = "18:00",
  slotDuration = 30,
  selectedTime,
  handleTimeSelect,
}) => {
  const generateTimeSlots = (start, end, duration) => {
    const slots = [];
    let currentTime = new Date(start);

    while (currentTime <= end) {
      slots.push(new Date(currentTime));
      currentTime.setMinutes(currentTime.getMinutes() + duration);
    }
    // console.log(slots);
    return slots;
  };

  const formatTime = (date) => {
    const foo = date.toTimeString().slice(0, 5);
    // console.log(foo);
    return foo;
  };

  const getAdjustedStartTime = (date) => {
    const now = new Date();
    const isToday = now.toDateString() === date.toDateString();

    let start = new Date(date);
    start.setHours(...startTime.split(":"));
    if (isToday && start < now) {
      start = new Date(now);
    }

    const end = new Date(date);
    end.setHours(...endTime.split(":"));

    return { start, end };
  };

  const { start, end } = getAdjustedStartTime(date);
  const timeSlots = generateTimeSlots(start, end, slotDuration);
  console.log(timeSlots);

  return (
    <div>
      {/* <h3>Available Time Slots for {date.toDateString()}</h3> */}
      {/* <ul> */}
      {timeSlots.length > 0 ? (
        timeSlots.map((slot, index) => (
          <Button
            key={index}
            variant={formatTime(slot) === selectedTime ? "default" : "outline"}
            className="w-full"
            onClick={() => handleTimeSelect(formatTime(slot))}
          >
            {formatTime(slot)}
          </Button>
        ))
      ) : (
        <div>Select a date first!</div>
      )}
      {/* </ul> */}
    </div>
  );
};
