export default function AnnouncementBar() {
  return (
    <div className="bg-green-900 text-cream text-xs tracking-wide">
      <div className="max-w-7xl mx-auto px-6 py-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-center">
        <span>FREE SHIPPING ON ALL PREPAID ORDERS</span>
        <span className="hidden sm:inline opacity-60">•</span>
        <span>EXTRA 5% OFF ON PREPAID</span>
        <span className="hidden sm:inline opacity-60">•</span>
        <span>COD AVAILABLE ABOVE ₹299</span>
      </div>
    </div>
  )
}
