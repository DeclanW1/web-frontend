import Image from "next/image";


// Contact info + Booter links in a row
export default function InfoRow() {
  return (
    <div className="mt-10 pt-6">
      <div className="hidden lg:flex lg:items-start lg:justify-between lg:gap-8 text-[13px] text-white font-mono">
        <div className="shrink-0 flex items-start min-w-0">
          <div className="relative h-12 w-28">
            <Image src="/dnslogo.png" alt="DNS" fill className="object-contain" />
          </div>
        </div>

        {/* Contact info */}
        <div className="shrink-0 leading-relaxed min-w-0">
          <div className="leading-none">Contact us</div>
          <div className="mt-2 whitespace-nowrap">E&nbsp;&nbsp;info@dnslimited.co.uk</div>
          <div className="whitespace-nowrap">T&nbsp;&nbsp;0845 034 0095</div>
        </div>

        {/* Address */}
        <div className="shrink-0 leading-relaxed min-w-0">
          <div className="leading-none">Address</div>
          <div className="mt-2">
            Unit 9<br />
            Royal Scot Road,<br />
            Pride Park, Derby<br />
            DE24 8AJ
          </div>
        </div>

        {/* Opening hours */}
        <div className="shrink-0 leading-relaxed min-w-0">
          <div className="leading-none">Opening hours</div>
          <div className="mt-2">
            Mon – Fri:<br />
            9 am – 5:30 pm
          </div>
        </div>

        {/* About us links */}
        <div className="shrink-0 leading-relaxed min-w-0">
          <div className="leading-none">About us</div>
          <ul className="mt-2 space-y-1">
            <li>CSR</li>
            <li>Environment &amp; sustainability</li>
            <li>Meet the team</li>
          </ul>
        </div>

        {/* Services links */}
        <div className="shrink-0 leading-relaxed min-w-0">
          <div className="leading-none">Services</div>
          <ul className="mt-2 space-y-1">
            <li>IT services</li>
            <li>Communications</li>
            <li>Managed print services</li>
            <li>Document management</li>
          </ul>
        </div>
      </div>


      {/* Mobile layout */}
      <div className="lg:hidden grid grid-cols-2 gap-x-10 gap-y-8 text-sm text-white font-mono">
        <div className="col-span-2 flex items-start">
          <div className="relative h-10 w-24">
            <Image src="/dnslogo.png" alt="DNS" fill className="object-contain" />
          </div>
        </div>
        <div>
          <div>Contact us</div>
          <div className="mt-2 whitespace-nowrap">E&nbsp;&nbsp;info@dnslimited.co.uk</div>
          <div className="whitespace-nowrap">T&nbsp;&nbsp;0845 034 0095</div>
        </div>
        <div>
          <div>Address</div>
          <div className="mt-2">
            Unit 9<br />Royal Scot Road,<br />Pride Park, Derby<br />DE24 8AJ
          </div>
        </div>
        <div>
          <div>Opening hours</div>
          <div className="mt-2">Mon – Fri:<br />9 am – 5:30 pm</div>
        </div>
        <div>
          <div>About us</div>
          <ul className="mt-2 space-y-1">
            <li>CSR</li>
            <li>Environment &amp; sustainability</li>
            <li>Meet the team</li>
          </ul>
        </div>
        <div>
          <div>Services</div>
          <ul className="mt-2 space-y-1">
            <li>IT services</li>
            <li>Communications</li>
            <li>Managed print services</li>
            <li>Document management</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
