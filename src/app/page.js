"use client"
import React, { useState } from 'react';
import { 
  FiClock, FiCalendar, FiUser, FiInfo, FiLock, 
  FiChevronDown, FiPlus, FiMinus, FiCheckCircle, FiCheck, FiArrowRight,
  FiShare2, FiBookmark, FiAlertTriangle, FiShield, FiFileText, FiLayers,
  FiCheckSquare, FiHelpCircle, FiPhoneCall, FiMenu, FiX
} from 'react-icons/fi';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Are plastic temporary walls allowed on California construction projects?",
      a: "Sometimes. Plastic sheeting may be acceptable for certain short-duration or lower-risk activities when the approved plan permits it. It is not an acceptable substitute for a required fire-resistance-rated separation, and healthcare projects may impose additional ICRA and facility-specific requirements. Confirm the application with the project team and AHJ."
    },
    {
      q: "Do all temporary walls need a one-hour fire rating?",
      a: "No. The required fire performance depends on the wall’s location, purpose, building conditions, approved construction plan, and applicable code. A temporary barrier that replaces or interrupts a required rated separation may need to match that rating. Product and assembly documentation should be reviewed before installation."
    },
    {
      q: "Is ASTM E84 Class A the same as a one-hour fire rating?",
      a: "No. ASTM E84 measures surface flame spread and smoke development. A one-hour fire-resistance rating applies to a tested and listed assembly under a method such as ASTM E119 or another code-accepted standard. One result cannot be substituted for the other."
    },
    {
      q: "What temporary walls are required for hospital renovations?",
      a: "The answer depends on the construction activity, patient risk group, facility policy, fire and life-safety conditions, and the resulting ICRA class. Higher precaution classes can require critical barriers, sealed penetrations, controlled negative airflow, pressure monitoring, HEPA filtration, and an anteroom. The infection preventionist and facility team should approve the plan."
    },
    {
      q: "Are modular temporary walls automatically code compliant?",
      a: "No. Compliance depends on the specific system, tested configuration, field installation, location, and approval. Verify the panel and frame documentation, fire-performance data, seals, doors, penetrations, bracing, pressure-control details, and project-specific requirements."
    },
    {
      q: "How should contractors compare temporary wall quotes?",
      a: "Compare the total scope, not just the price per linear foot. Confirm wall height, doors, delivery, installation, sealing, negative-air connections, monitoring, after-hours work, reconfiguration, maintenance, removal, and documentation. Also identify exclusions and who is responsible for approvals."
    },
    {
      q: "Can temporary walls replace silica controls at the tool?",
      a: "No. Containment can help protect adjacent spaces, but it does not replace required engineering controls and work practices such as integrated water delivery, shrouds, dust collection, HEPA vacuuming, exposure assessment, respiratory protection, or a written exposure-control plan."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased">
      
      {}


      {}
      <section className="relative bg-slate-950 text-white py-16 lg:py-24 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0 opacity-25 bg-cover bg-center" style={{ backgroundImage: `url('/back.png')` }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-black uppercase tracking-widest mb-4 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full w-fit">
            <FiShield size={14} />
            <span>California Construction Risk Analysis</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white max-w-4xl leading-tight mb-6 tracking-tight">
            5 Risks of Cheap Temporary Walls on California Projects
          </h1>

          <p className="text-slate-300 max-w-3xl text-base sm:text-lg mb-8 leading-relaxed font-normal">
            Cheap temporary walls may lower the bid, but weak seals, unsuitable fire performance, repeated repairs, and disruptive removal can put occupied California projects at risk. Here is how to choose containment based on total project impact, not material price alone.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-400 border-t border-slate-800/80 pt-6">
            <div className="flex items-center gap-2">
              <FiCalendar className="text-amber-400" />
              <span>Last reviewed: <strong className="text-slate-200">September 2026</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <FiClock className="text-amber-400" />
              <span>Read time: <strong className="text-slate-200">7 min read</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <FiUser className="text-amber-400" />
              <span>Author: <strong className="text-slate-200">5DCCS Technical Editorial Team</strong></span>
            </div>
          </div>
        </div>
      </section>

      {}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Article Body Column */}
          <main className="lg:col-span-8 bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-slate-200/80">
            <article className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
              
              {/* Introduction */}
              <div className="border-b border-slate-100 pb-8 mb-8">
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 tracking-tight leading-snug">
                  Why Cheap Temporary Walls Put Construction Projects at Risk: 5 Risks for CA Projects
                </h2>
                <p className="text-slate-700 mb-4 text-base sm:text-lg leading-relaxed">
                  Cheap temporary walls can reduce one line item at bid time, but they can raise the total cost of an occupied renovation. Five risks come up most often: dust escaping into occupied space, fire performance that does not match the requirement, barriers that cannot hold up to healthcare infection-control conditions, labor and rework that erase the savings, and disposable materials that complicate closeout. Any of them can lead to corrective work, inspection delays, or a facility-directed shutdown.
                </p>
                <p className="p-4 bg-amber-500/10 border-l-4 border-amber-500 text-slate-900 font-semibold rounded-r-lg my-6 text-sm sm:text-base">
                  The practical question is not, “What is the least expensive barrier?” It is, “What is the least expensive containment system that can reliably meet this project’s safety, infection-control, schedule, and operational requirements?”
                </p>
                <p className="text-slate-700">
                  That distinction matters in California hospitals, airports, data centers, laboratories, offices, and other facilities that must remain open during construction.
                </p>
              </div>

              {/* Section: Why can a low-cost wall become expensive? */}
   <section className="my-10">
  {/* Section Heading */}
  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 tracking-tight">
    Why can a low-cost temporary wall become expensive?
  </h3>

  {/* IMAGE 01: Infographic */}
  <div className="my-8 rounded-xl overflow-hidden shadow-md border border-slate-200 bg-slate-900 p-4 text-white">

    {/* Image Header */}
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3 border-b border-slate-800 pb-2">
      <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
        Visual 01 • Lifecycle Cost Infographic
      </span>

      <span className="text-[11px] bg-slate-800 text-slate-300 px-2 py-1 rounded">
        01-total-project-cost-infographic.png
      </span>
    </div>

    {/* Actual Image */}
    <div className="relative bg-white rounded-lg overflow-hidden border border-slate-800">
      <img
        src="/Low Cost.png"
        alt="Infographic comparing the lifecycle costs of plastic, drywall, and modular temporary walls"
        loading="lazy"
        className="w-full h-auto object-contain block"
      />
    </div>

    {/* Image Caption */}
    <p className="text-[11px] text-slate-400 mt-2 italic text-center">
      Alt text: Infographic comparing the lifecycle costs of plastic,
      drywall, and modular temporary walls.
    </p>
  </div>

  {/* Paragraph 1 */}
  <p className="mb-4 text-slate-700 leading-7">
    A temporary barrier has to do more than hide the work. Depending on the
    project, it may need to control dust, support negative pressure, withstand
    traffic and impact, preserve an accessible means of egress, meet a
    specified fire-performance requirement, and maintain a professional
    appearance for weeks or months.
  </p>

  {/* Paragraph 2 */}
  <p className="mb-6 text-slate-700 leading-7">
    A basic plastic barrier may be appropriate for short, low-dust work when
    the approved plan allows it. Temporary drywall can provide a durable
    partition and may be designed as a fire-resistance-rated assembly, but it
    takes time to build, finish, and remove. A modular system costs more than
    plastic up front, yet it can reduce installation time, repairs, demolition
    dust, and disposal.
  </p>

  {/* Lifecycle Comparison Table */}
  <div className="my-8 overflow-hidden rounded-xl border border-slate-200 shadow-sm">

    {/* Table Header */}
    <div className="bg-slate-900 text-white px-5 py-3 font-bold text-sm flex items-center gap-2">
      <FiFileText className="text-amber-400 flex-shrink-0" />

      <span>
        Temporary Barrier Lifecycle Comparison
      </span>
    </div>

    {/* Responsive Table */}
    <div className="overflow-x-auto">
      <table className="w-full min-w-[700px] text-left text-xs sm:text-sm border-collapse">

        {/* Table Head */}
        <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
          <tr>
            <th className="p-4 border-r border-slate-200">
              Barrier option
            </th>

            <th className="p-4 border-r border-slate-200">
              Often a fit for
            </th>

            <th className="p-4">
              Main lifecycle concern
            </th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody className="divide-y divide-slate-200 text-slate-700 bg-white">

          {/* Plastic */}
          <tr className="hover:bg-slate-50/80 transition-colors">

            <td className="p-4 font-bold text-slate-900 border-r border-slate-200 bg-slate-50/50">
              Polyethylene sheeting
            </td>

            <td className="p-4 border-r border-slate-200">
              Short-duration, light-duty work when permitted by the project plan
            </td>

            <td className="p-4 text-amber-800 font-medium bg-amber-50/30">
              Tears, loose seams, pressure-related movement, frequent
              inspection and repair
            </td>

          </tr>

          {/* Drywall */}
          <tr className="hover:bg-slate-50/80 transition-colors">

            <td className="p-4 font-bold text-slate-900 border-r border-slate-200 bg-slate-50/50">
              Temporary drywall
            </td>

            <td className="p-4 border-r border-slate-200">
              Longer projects or assemblies that must be constructed to a
              specific design
            </td>

            <td className="p-4 text-slate-700">
              Slow installation, wet finishing, demolition dust, disposal,
              difficult reconfiguration
            </td>

          </tr>

          {/* Modular */}
          <tr className="hover:bg-slate-50/80 transition-colors">

            <td className="p-4 font-bold text-slate-900 border-r border-slate-200 bg-slate-50/50">
              Modular rigid panels
            </td>

            <td className="p-4 border-r border-slate-200">
              Occupied, high-traffic, phased, image-sensitive, or
              pressure-controlled work
            </td>

            <td className="p-4 text-emerald-800 font-medium bg-emerald-50/30">
              Higher initial price and the need to verify the specific
              system&apos;s test reports, seals, and configuration
            </td>

          </tr>

        </tbody>
      </table>
    </div>
  </div>

  {/* Compliance Note */}
  <div className="bg-blue-900/5 border border-blue-900/20 rounded-xl p-5 flex gap-4 items-start my-6">

    <FiInfo className="text-blue-900 text-xl flex-shrink-0 mt-0.5" />

    <p className="text-xs sm:text-sm text-blue-950 font-medium leading-relaxed m-0">
      <strong>Note on Compliance:</strong>{" "}
      No material is automatically compliant in every setting. The complete
      assembly, field installation, approved plan, and ongoing maintenance
      determine performance.
    </p>

  </div>
</section>

              {}
              <section className="my-12 pt-8 border-t border-slate-200">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 tracking-tight flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-sm font-bold">1</span>
                  <span>Risk 1: Dust can escape into occupied spaces and HVAC systems</span>
                </h3>

                {/* IMAGE 02 */}
                <div className="my-6 rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-slate-100">
                  <img 
                    src="/Dust Escaping.png" 
                    alt="Dust escaping from a plastic construction barrier toward an office HVAC return." 
                    className="w-full h-64 sm:h-80 object-cover"
                  />
                  <div className="p-3 bg-slate-900 text-slate-300 text-xs flex justify-between items-center">
                    <span className="font-semibold text-amber-400">Figure 02 • Dust & HVAC Breach Analysis</span>
                    <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded">02-dust-hvac-breach-photo.jpg</span>
                  </div>
                </div>

                <p className="mb-4">
                  Plastic sheeting is inexpensive because it is light and simple. Those same qualities can make it vulnerable in an active corridor. Carts, ladders, workers, door cycles, and pressure changes can loosen a taped edge or damage the film. A barrier that looked acceptable at startup may no longer be sealed after several shifts.
                </p>
                <p className="mb-4">
                  Once dust crosses the work boundary, it can enter occupied rooms or return-air pathways. The response may include cleaning, filter replacement, air-quality review, barrier repairs, or a pause while the facility confirms that conditions are acceptable. In a hospital, laboratory, or data center, even a small breach can trigger a disproportionate operational response.
                </p>
                <p className="mb-4">
                  Construction containment is also only one part of dust control. When work disturbs silica-containing concrete, masonry, mortar, tile, or similar materials, contractors must use the exposure controls that apply to the task. Cal/OSHA’s construction silica standard, Title 8 Section 1532.3, sets an action level of 25 micrograms per cubic meter and a permissible exposure limit of 50 micrograms per cubic meter, each measured as an eight-hour time-weighted average. The standard also addresses engineering and work-practice controls, housekeeping, exposure assessment, and written exposure-control plans.
                </p>
                <p className="mb-4">
                  A temporary wall does not replace source capture, wet methods, HEPA-filtered vacuuming, respiratory protection, or other required controls. It helps establish the work boundary and protect adjacent operations when it is properly selected, sealed, monitored, and maintained.
                </p>
                <p className="text-xs sm:text-sm font-bold text-blue-900 bg-blue-50 p-3 rounded-lg border border-blue-100 inline-block">
                  For a broader planning overview, see 5DCCS’s <a href="#" className="underline text-blue-900 hover:text-blue-950 font-black">guide to California temporary wall regulations and building codes</a>.
                </p>
              </section>

              {}
              <section className="my-12 pt-8 border-t border-slate-200">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 tracking-tight flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-sm font-bold">2</span>
                  <span>Risk 2: “Fire rated” can mean two very different things</span>
                </h3>

                {/* IMAGE 03: Infographic */}
           {/* IMAGE 03: Fire Standards Comparison */}
<div className="my-6 rounded-xl overflow-hidden shadow-md border border-slate-200 bg-slate-900 p-4 text-white">

  {/* Image Header */}
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3 border-b border-slate-800 pb-2">
    <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
      Visual 03 • Fire Standards Comparison
    </span>

    <span className="text-[11px] bg-slate-800 text-slate-300 px-2 py-1 rounded">
      03-fire-tests-comparison-infographic.png
    </span>
  </div>

  {/* Actual Image */}
  <div className="bg-white rounded-lg overflow-hidden border border-slate-800">
    <img
      src="/Flameblock Sheathing.png"
      alt="Infographic comparing ASTM E84 surface burning with ASTM E119 assembly fire resistance"
      loading="lazy"
      className="w-full h-auto object-contain block"
    />
  </div>

  {/* Caption */}
  <p className="text-[11px] text-slate-400 mt-2 italic text-center">
    Alt text: Infographic comparing ASTM E84 surface burning with ASTM E119
    assembly fire resistance.
  </p>

</div>

                <p className="mb-4">
                  Fire terminology is easy to oversimplify. An ASTM E84 Class A result describes surface-burning behavior, including flame spread and smoke development. It does not, by itself, establish that a wall assembly will resist fire for one hour.
                </p>
                <p className="mb-4">
                  An hourly fire-resistance rating is based on an assembly test such as ASTM E119 or another code-accepted listing. ASTM E119 evaluates how long a complete building element can contain fire, retain structural integrity, or do both under specified test conditions. The studs or frames, panels, joints, penetrations, doors, fasteners, and installation details all matter.
                </p>
                <p className="mb-4">
                  This distinction is especially important when a temporary barrier affects a rated corridor, smoke compartment, exit component, or separation between occupied space and construction. HCAI’s guidance for temporary construction barriers in California healthcare facilities states that when temporary construction is installed during work on a fire-resistive assembly, the temporary construction must meet the same fire rating as the permanent partition. It also prohibits plastic or vinyl dust barriers in place of required fire-rated separations and requires coordination when construction affects egress.
                </p>
                
                <div className="bg-slate-50 border-l-4 border-blue-900 p-5 rounded-r-lg my-6">
                  <p className="font-bold text-slate-900 text-sm mb-3">
                    The safe procurement question is therefore not, “Is the panel fire rated?” Ask instead:
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <FiCheckCircle className="text-blue-900 mt-0.5 flex-shrink-0" />
                      <span>What test or listing applies to the complete installed assembly?</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FiCheckCircle className="text-blue-900 mt-0.5 flex-shrink-0" />
                      <span>Does the proposed wall height and configuration match the tested design?</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FiCheckCircle className="text-blue-900 mt-0.5 flex-shrink-0" />
                      <span>Are the door, frame, penetrations, head condition, and perimeter details included?</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FiCheckCircle className="text-blue-900 mt-0.5 flex-shrink-0" />
                      <span>Have the design team, facility, and Authority Having Jurisdiction (AHJ) accepted the approach?</span>
                    </li>
                  </ul>
                </div>
                
                <p className="mb-4">
                  Project-specific requirements can vary. Early review is usually less expensive than replacing a barrier after an inspection.
                </p>
              </section>

              {}
              <section className="my-12 pt-8 border-t border-slate-200">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 tracking-tight flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-sm font-bold">3</span>
                  <span>Risk 3: Flexible barriers can struggle to hold ICRA conditions in busy healthcare corridors</span>
                </h3>

                {/* IMAGE 04 */}
                <div className="my-6 rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-slate-100">
                  <img 
                    src="/Shielding.png" 
                    alt="Rigid modular healthcare containment with pressure monitoring and negative-air equipment." 
                    className="w-full h-64 sm:h-80 object-cover"
                  />
                  <div className="p-3 bg-slate-900 text-slate-300 text-xs flex justify-between items-center">
                    <span className="font-semibold text-amber-400">Figure 04 • Healthcare Modular Containment System</span>
                    <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded">04-healthcare-containment-photo.jpg</span>
                  </div>
                </div>

                <p className="mb-4">
                  Healthcare construction adds infection-control requirements to ordinary dust and life-safety concerns. The Centers for Disease Control and Prevention’s guidance for construction and renovation in healthcare facilities recommends an Infection Control Risk Assessment (ICRA) before work begins. It calls for barriers that prevent construction dust from entering patient-care areas, remain impermeable to fungal spores, comply with local fire codes, and support negative pressure where required. It also recommends monitoring barrier integrity and repairing gaps or breaks.
                </p>
                <p className="mb-4">
                  ASHE’s ICRA 2.0 Matrix of Precautions assigns precaution classes based on the construction activity and the patient risk group. For Class IV and Class V work, the matrix calls for critical barriers, sealed penetrations, controlled airflow into the construction area, continuous negative-pressure monitoring, and HEPA-filtered exhaust when air is discharged indoors. Class V also calls for an anteroom sized for personnel, equipment staging, and cleaning.
                </p>
                <p className="mb-4">
                  Importantly, ICRA 2.0 does not say that every plastic barrier is prohibited. It permits plastic or hard barriers in certain Class IV and V conditions when they are securely installed and protected from movement or damage. The field concern is durability: a flexible barrier in a busy corridor may need more frequent inspection and repair than a rigid, gasketed system.
                </p>
                <p className="mb-4">
                  For long-duration, high-traffic, or highly sensitive work, rigid modular panels can make the approved containment plan easier to maintain. Smooth surfaces are easier to wipe down. Integrated doors reduce makeshift access points. Gasketed joints support pressure control. Reusable panels can also be removed without cutting and demolishing drywall beside an active patient area.
                </p>
                <p className="text-xs sm:text-sm font-bold text-blue-900 bg-blue-50 p-3 rounded-lg border border-blue-100 inline-block">
                  Project teams comparing service models can review the <a href="#" className="underline text-blue-900 hover:text-blue-950 font-black">advantages of renting modular containment panels</a> for phased or temporary work.
                </p>
              </section>

              {}
              <section className="my-12 pt-8 border-t border-slate-200">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 tracking-tight flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-sm font-bold">4</span>
                  <span>Risk 4: Labor, rework, and phasing can erase the material savings</span>
                </h3>

                {/* IMAGE 05 */}
                <div className="my-6 rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-slate-100">
                  <img 
                    src="/Labor.png" 
                    alt="Crews remove temporary drywall and reconfigure modular panels during a phased office renovation." 
                    className="w-full h-64 sm:h-80 object-cover"
                  />
                  <div className="p-3 bg-slate-900 text-slate-300 text-xs flex justify-between items-center">
                    <span className="font-semibold text-amber-400">Figure 05 • Reconfiguration and Labor Costs</span>
                    <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded">05-labor-rework-phasing-photo.jpg</span>
                  </div>
                </div>

                <p className="mb-3 font-bold text-slate-900">
                  The purchase price of plastic or gypsum board is not the total installed cost of containment. A realistic estimate should include:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4 text-slate-700 text-sm">
                  <li>layout, framing, finishing, sealing, and door installation;</li>
                  <li>daily inspection, patching, and pressure-response work;</li>
                  <li>after-hours or infection-control scheduling;</li>
                  <li>reconfiguration as the construction boundary moves;</li>
                  <li>cleaning before barrier removal;</li>
                  <li>dismantling, hauling, and disposal; and</li>
                  <li>the schedule impact on the trades waiting behind the barrier.</li>
                </ul>
                <p className="mb-4">
                  These costs are amplified on Bay Area projects, where labor rates are high and public works may be subject to prevailing-wage requirements. California’s applicable rate depends on factors such as location, craft, classification, and bid date, so project teams should use the current Department of Industrial Relations prevailing-wage determination rather than a generic statewide rate.
                </p>
                <p className="mb-4">
                  Temporary drywall is familiar and can be the right answer, but it introduces framing, board installation, joint treatment, curing, and removal. If the project is phased, that process may repeat several times. Modular panels can often be relocated or expanded without rebuilding the separation from raw materials.
                </p>
                <p className="mb-4">
                  This is where a higher-priced system can produce a lower project cost. The value comes from avoided labor and disruption, not from the panel price alone. For budgeting considerations, see the <a href="#" className="text-blue-900 font-bold underline hover:text-blue-950">guide to the real costs of temporary wall pricing in California</a>.
                </p>
              </section>

              {}
              <section className="my-12 pt-8 border-t border-slate-200">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 tracking-tight flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-sm font-bold">5</span>
                  <span>Risk 5: Disposable walls create waste and a difficult closeout</span>
                </h3>

                {/* IMAGE 06 */}
                <div className="my-6 rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-slate-100">
                  <img 
                    src="/Rigid Modular.png" 
                    alt="Disposable construction waste beside reusable modular wall panels at project closeout." 
                    className="w-full h-64 sm:h-80 object-cover"
                  />
                  <div className="p-3 bg-slate-900 text-slate-300 text-xs flex justify-between items-center">
                    <span className="font-semibold text-amber-400">Figure 06 • Waste Management & CALGreen Compliance</span>
                    <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded">06-disposable-wall-waste-photo.jpg</span>
                  </div>
                </div>

                <p className="mb-4">
                  As explained in CalRecycle’s construction-waste guidance, California’s CALGreen framework requires projects that need local construction permits to divert at least 65 percent of construction and demolition material from landfills. Local requirements and project-specific waste plans may add further obligations.
                </p>
                <p className="mb-4">
                  Temporary drywall adds material during installation and removes it again at closeout. Plastic sheeting is also commonly discarded when it is torn, contaminated, or difficult to recycle. Neither option automatically causes a waste-plan failure, but both add material that must be tracked, transported, and managed.
                </p>
                <p className="mb-4">
                  Reusable modular panels reduce the amount of temporary material that is demolished at the end of each phase. They can also simplify closeout in occupied areas because removal does not require sanding, cutting, or breaking gypsum board. There may still be consumables and packaging to manage, so claims such as “zero waste” should be supported by the actual project process.
                </p>
              </section>

              {}
              <section className="my-12 pt-8 border-t border-slate-200">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 tracking-tight">
                  When are cheap temporary walls appropriate?
                </h3>

                {/* IMAGE 07 */}
                <div className="my-6 rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-slate-100">
                  <img 
                    src="/Temporary Wall.png" 
                    alt="Technician inspecting a sealed plastic barrier for a short, low-dust office task." 
                    className="w-full h-64 sm:h-80 object-cover"
                  />
                  <div className="p-3 bg-slate-900 text-slate-300 text-xs flex justify-between items-center">
                    <span className="font-semibold text-amber-400">Figure 07 • Appropriate Low-Risk Containment</span>
                    <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded">07-right-wall-right-risk-photo.jpg</span>
                  </div>
                </div>

                <p className="mb-4">
                  A low-cost barrier can be appropriate when the work is short, produces little dust, occurs away from vulnerable occupants, and does not affect a rated separation or required path of egress. It must still match the approved containment plan and remain secure for the duration of the work.
                </p>
                <p className="mb-4">
                  The mistake is not choosing plastic. The mistake is choosing it only because it has the lowest material price, without considering traffic, pressure, duration, fire and life safety, facility standards, or the cost of maintaining it.
                </p>
                <p className="mb-4">
                  Likewise, modular panels should not be overspecified. A project does not benefit from paying for acoustic, fire-resistance, or healthcare features that it does not need. Good containment planning matches the system to the actual risk.
                </p>
              </section>

              {}
              <section className="my-12 pt-8 border-t border-slate-200">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 tracking-tight">
                  What should contractors verify before selecting temporary walls?
                </h3>

                {/* IMAGE 08: Infographic */}
  {/* IMAGE 08: Verification Checklist Graphic */}
<div className="my-6 rounded-xl overflow-hidden shadow-md border border-slate-200 bg-slate-900 p-4 text-white">

  {/* Image Header */}
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3 border-b border-slate-800 pb-2">
    <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
      Visual 08 • Verification Checklist Graphic
    </span>

    <span className="text-[11px] bg-slate-800 text-slate-300 px-2 py-1 rounded">
      08-contractor-verification-checklist-infographic.png
    </span>
  </div>

  {/* Actual Image */}
  <div className="bg-white rounded-lg overflow-hidden border border-slate-800">
    <img
      src="/Verify.png"
      alt="Checklist of nine items contractors should verify before selecting temporary walls"
      loading="lazy"
      className="w-full h-auto object-contain block"
    />
  </div>

  {/* Caption */}
  <p className="text-[11px] text-slate-400 mt-2 italic text-center">
    Alt text: Checklist of nine items contractors should verify before
    selecting temporary walls.
  </p>

</div>

                <p className="mb-4 font-semibold text-slate-900">
                  Before awarding the containment scope, confirm the following with the project team:
                </p>

                <div className="grid grid-cols-1 gap-3 my-6">
                  {[
                    { num: "01", title: "Work and occupancy", desc: "What activities will occur, who remains nearby, and how long will each phase last?" },
                    { num: "02", title: "Dust-control plan", desc: "What source controls, HEPA equipment, exhaust route, pressure relationship, and monitoring method are required?" },
                    { num: "03", title: "Fire and egress", desc: "Does the barrier affect a rated assembly, smoke compartment, corridor width, accessible route, exit sign, alarm device, sprinkler coverage, or fire equipment?" },
                    { num: "04", title: "Healthcare requirements", desc: "What ICRA class and facility-specific infection-control permit apply? Is an anteroom required?" },
                    { num: "05", title: "System documentation", desc: "Do the product data, test reports, listings, and installation details match the proposed configuration?" },
                    { num: "06", title: "Doors and penetrations", desc: "Are door hardware, self-closing requirements, negative-air ports, cables, ducts, and utility penetrations included in the approved design?" },
                    { num: "07", title: "Phasing", desc: "How often will the wall move, and who is responsible for adjustments, inspection, and repairs?" },
                    { num: "08", title: "Removal and waste", desc: "How will the barrier be cleaned, dismantled, transported, reused, recycled, or discarded?" },
                    { num: "09", title: "Approval", desc: "Have the facility, infection preventionist, design professional, safety team, and AHJ reviewed the plan where required?" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4 p-3.5 rounded-lg bg-slate-50 border border-slate-200/80 items-start">
                      <span className="font-black text-blue-900 text-sm bg-blue-100 px-2.5 py-1 rounded">{item.num}</span>
                      <div className="text-xs sm:text-sm">
                        <strong className="text-slate-900 block mb-0.5">{item.title}</strong>
                        <span className="text-slate-600">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mb-4">
                  These questions also make quotes easier to compare. A cheap proposal may exclude doors, pressure monitoring, after-hours labor, reconfiguration, or removal. A complete proposal makes those responsibilities visible before work starts. For additional field lessons, review these <a href="#" className="text-blue-900 font-bold underline hover:text-blue-950">common contractor mistakes with temporary barriers</a>.
                </p>
              </section>

              {}
              <section className="my-12 pt-8 border-t border-slate-200">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 tracking-tight">
                  The best temporary wall protects the whole project
                </h3>

                {/* IMAGE 09 */}
                <div className="my-6 rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-slate-100">
                  <img 
                    src="/Wall protect.png" 
                    alt="Modular containment protecting an occupied airport terminal during construction." 
                    className="w-full h-64 sm:h-80 object-cover"
                  />
                  <div className="p-3 bg-slate-900 text-slate-300 text-xs flex justify-between items-center">
                    <span className="font-semibold text-amber-400">Figure 09 • High-Traffic Terminal Containment</span>
                    <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded">09-whole-project-protection-photo.jpg</span>
                  </div>
                </div>

                <p className="mb-4">
                  On an occupied California jobsite, containment is part of the project’s operating strategy. The right system protects people and sensitive spaces while helping trades work without unnecessary interruption.
                </p>
                <p className="mb-4">
                  The visual impact matters too. In an occupied lobby, clinic, office, or terminal, the containment wall is often the most visible part of the project. A stable, cleanable surface with commercial door hardware communicates control. Torn plastic and repeated tape repairs communicate the opposite, even when the work behind the barrier is being managed well.
                </p>
                <p className="mb-4">
                  Plastic, drywall, and modular panels can each have a legitimate role. The best choice is the one that meets the approved requirements with the lowest total cost and the least operational risk. Cheap temporary walls are not truly inexpensive if they require repeated repairs, delay adjacent work, or complicate closeout.
                </p>
                <p className="mb-4">
                  When a project involves high traffic, negative pressure, repeated phasing, sensitive occupants, or strict appearance standards, modular containment often earns its premium through faster changes, cleaner removal, and more predictable field performance.
                </p>
                <p className="mb-4">
                  5DCCS provides temporary wall installation and turnkey containment services across the Bay Area and Northern California. The team supports full-service and self-service rentals, system sales, site assessment, layout planning, installation, reconfiguration, and removal.
                </p>
                <div className="p-5 bg-gradient-to-r from-blue-950 to-indigo-950 text-white rounded-xl my-6">
                  <p className="font-bold text-sm sm:text-base m-0 leading-relaxed">
                    Planning an occupied renovation? Request a free containment consultation to review your layout, schedule, barrier performance, and documentation needs before the work begins.
                  </p>
                </div>
              </section>

            </article>
          </main>

          {}
          <aside className="lg:col-span-4 space-y-8">
            
            {/* Author Profile Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-950 text-amber-400 font-extrabold flex items-center justify-center border-2 border-amber-400 text-base">
                  5D
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">5DCCS Editorial Team</h4>
                  <p className="text-xs text-slate-500">Containment Specialists</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Providing technical expertise on California containment codes, temporary fire-rated walls, and infection control compliance.
              </p>
              <div className="flex items-center justify-between text-xs text-slate-400 border-t border-slate-100 pt-3">
                <span className="flex items-center gap-1"><FiShare2 size={13} /> Share</span>
                <span className="flex items-center gap-1"><FiBookmark size={13} /> Bookmark</span>
              </div>
            </div>


{/* Sticky Sidebar */}
<div className="lg:sticky lg:top-6 self-start max-h-[calc(100vh-3rem)] overflow-y-auto space-y-6 pr-2 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent">

  {/* Action Card */}
  <div className="bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 p-6 rounded-2xl text-white shadow-xl border border-blue-800/50">

    <div className="w-10 h-10 bg-amber-400/20 rounded-lg border border-amber-400/40 flex items-center justify-center text-amber-400 mb-4">
      <FiPhoneCall size={20} />
    </div>

    <h4 className="text-base font-bold mb-2 text-white">
      Need Turnkey Containment in Northern CA?
    </h4>

    <p className="text-xs text-slate-300 mb-6 leading-relaxed">
      Consult with our field engineers on ICRA Class IV/V barriers,
      fire compliance, and rental logistics today.
    </p>

    <a
      href="/contact"
      className="w-full bg-amber-400 text-slate-950 hover:bg-amber-300 py-3 rounded-lg text-xs font-black uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
    >
      <span>Request Free Consultation</span>
      <FiArrowRight size={14} />
    </a>
  </div>


  {/* Related Articles */}
  <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">

    <h4 className="text-sm font-bold text-slate-900 mb-4 pb-3 border-b border-slate-100 uppercase tracking-wider">
      You May Also Like
    </h4>

    <div className="space-y-4">
{[
  {
    title:
      "How to Keep Your Project on Schedule During Occupied Renovations",
    date: "August 2026",
    img:
      "https://5dccs.com/wp-content/uploads/2026/06/preventable_risks_containment_solution-768x432.jpg",
    href: "https://5dccs.com/dust-control-in-occupied-spaces/",
  },
  {
    title:
      "Choosing the Right Containment System for Healthcare Facilities",
    date: "July 2026",
    img:
      "https://5dccs.com/wp-content/uploads/2026/05/Temporary-Wall-Selection-Criteria-for-Events-768x431.jpg",
    href: "https://5dccs.com/affordable-temporary-walls-for-events/",
  },
  {
    title:
      "Fire-Rated Temporary Walls: What You Need to Know",
    date: "June 2026",
    img:
      "https://5dccs.com/wp-content/uploads/2026/05/Modular-Temporary-Solutions-vs-Permanent-Structures-and-What-General-Contractors-Should-Know-1024x576.jpg",
    href: "https://5dccs.com/temporary-wall-containment-owner-choices/",
  },
  {
    title:
      "Why California Projects Require Higher Standards for Containment",
    date: "May 2026",
    img:
      "https://5dccs.com/wp-content/uploads/2026/05/Hospital-corridor-with-modular-temporary-wall-system-installed-and-staff-walking-past-1024x646.jpg",
    href:
      "https://5dccs.com/modular-temporary-wall-solutions-vs-permanent-struc",
  },
  {
    title:
      "Why California Projects Require Higher Standards for Containment",
    date: "May 2026",
    img:
      "https://5dccs.com/wp-content/uploads/2026/04/negative_air_pressure_icra_compliance-768x429.jpg",
    href:
      "https://5dccs.com/negative-air-pressure-systems-icra-compliance/",
  },
    {
    title:
      "Why California Projects Require Higher Standards for Containment",
    date: "May 2026",
    img:
      "https://5dccs.com/wp-content/uploads/2026/04/Fire-Rated-Temp-Walls-and-When-You-Need-Them-768x413.jpg",
    href:
      "https://5dccs.com/fire-rated-temporary-walls-when-you-need-them/",
  },
    {
    title:
      "Why California Projects Require Higher Standards for Containment",
    date: "May 2026",
    img:
      "https://5dccs.com/wp-content/uploads/2026/04/ICRA-Rated-Temporary-Walls-in-a-Hospital-Corridor-V2-768x524.jpg",
    href:
      "https://5dccs.com/clean-construction-dust-control/",
  },
    {
    title:
      "Why California Projects Require Higher Standards for Containment",
    date: "May 2026",
    img:
      "https://5dccs.com/wp-content/uploads/2026/04/5dccs-true-cost-drywall-vs-modular-infographic-768x419.jpg",
    href:
      "https://5dccs.com/temporary-walls-vs-drywall-true-cost-comparison-for-gcs/",
  },
].map((item, idx) => (
  <a
    key={idx}
    href={item.href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex gap-3 items-start group cursor-pointer rounded-lg p-1 -m-1 hover:bg-slate-50 transition-all duration-200"
  >
    {/* Image */}
    <div className="w-16 h-16 bg-slate-100 rounded-lg overflow-hidden flex-shrink-0 border border-slate-200">
      <img
        src={item.img}
        alt={item.title}
        loading="lazy"
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
      />
    </div>

    {/* Content */}
    <div className="min-w-0 flex-1">
      <h5 className="text-xs font-bold text-slate-800 group-hover:text-blue-900 leading-snug line-clamp-2 transition-colors">
        {item.title}
      </h5>

      <span className="text-[10px] text-slate-400 mt-1 block">
        {item.date}
      </span>
    </div>
  </a>
))}
    </div>

  </div>

</div>



          </aside>
        </div>
      </div>

      {}
      <section className="bg-slate-100 border-t border-slate-200 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-black uppercase text-blue-900 tracking-widest bg-blue-100 px-3 py-1 rounded-full inline-block mb-2">Got Questions?</span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900">Frequently Asked Questions</h3>
          </div>

          {/* IMAGE 10 */}
          <div className="mb-10 rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white p-2">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" 
              alt="Project team reviewing temporary wall plans, hardware, and pressure-control requirements." 
              className="w-full h-56 sm:h-72 object-cover rounded-xl"
            />
            <div className="p-2.5 bg-slate-900 text-slate-300 text-xs flex justify-between items-center rounded-b-xl mt-1">
              <span className="font-semibold text-amber-400">Figure 10 • Technical Consultation & Planning</span>
              <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded">10-faq-consultation-photo.jpg</span>
            </div>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="border border-slate-200 rounded-xl bg-white overflow-hidden shadow-sm transition-all"
              >
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-4 sm:p-5 font-bold text-xs sm:text-sm text-slate-900 flex justify-between items-center gap-4 hover:bg-slate-50 transition-colors focus:outline-none"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-blue-50 text-blue-900 flex items-center justify-center text-xs flex-shrink-0">{idx + 1}</span>
                    <span>{faq.q}</span>
                  </span>
                  <span className="text-slate-400 flex-shrink-0">
                    {activeFaq === idx ? <FiMinus size={18} /> : <FiPlus size={18} />}
                  </span>
                </button>
                {activeFaq === idx && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {}
      <section className="bg-slate-950 text-white py-14 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-black mb-2 text-white">Let's Build a Safer, Smarter Project</h3>
            <p className="text-slate-400 text-xs sm:text-sm max-w-xl leading-relaxed">
              Get expert guidance on temporary wall systems, compliance, and project-specific solutions across California. Contact 5DCCS today.
            </p>
          </div>
          <button className="bg-amber-400 text-slate-950 px-8 py-3.5 rounded-full text-xs font-black uppercase tracking-wider hover:bg-amber-300 transition-all shadow-lg flex items-center gap-2 whitespace-nowrap">
            <span>Schedule a Consultation</span>
            <FiArrowRight size={16} />
          </button>
        </div>
      </section>

      {}
  

    </div>
  );
}