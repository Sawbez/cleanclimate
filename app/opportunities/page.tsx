"use client";

import Navbar from "@/components/ui/navbar";
import TracingBeam from "@/components/ui/tracing-beam";
import { Lato } from "next/font/google";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const lato = Lato({ weight: "400", subsets: ["latin"] });

const Opportunities = () => {
  return (
    <div className="w-full h-full">
      <Navbar className="top-2 border-zinc-800 border-2 rounded-full" />
      <div className="relative top-[120px]">
        <TracingBeam className="px-6">
          <div className="max-w-2xl mx-auto antialiased pt-4 relative">
            {content.map((item, index) => (
              <div key={`content-${index}`} className="mb-10">
                <p className={twMerge(lato.className, "text-xl mb-4")}>
                  {item.title}
                </p>

                <div className="text-sm prose prose-sm dark:prose-invert">
                  {item?.image && (
                    <Image
                      src={item.image}
                      alt="blog thumbnail"
                      height="1000"
                      width="1000"
                      className="rounded-lg mb-10 object-cover"
                    />
                  )}
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </TracingBeam>
      </div>
    </div>
  );
};

const content = [
  {
    title: "Opportunities to make your house greener",
    description: (
      <>
        <p>
          Fossil fuels are our primary energy source. However, when fossil fuels
          like coal are burned, CO2 is emitted; this leads to trapped heat in
          the atmosphere causing the temperature to rise. This can have
          disastrous effects on our planet. In addition, creating energy from
          fossil fuels is dangerous and responsible for around 800,000 deaths
          per year. This is why it is so important to change and improve, and
          here are some opportunities for you to do that.{" "}
        </p>
        <p>
          Add and use renewable energy sources such as solar panels, wind
          turbines, or hydroelectric power for your home or business. The
          average cost to install a 5 kW solar panel is about $14,625 before
          investment tax credit, often ranging from $12,431 to $16,819. After
          ITC, the price drops by 30%, the average 5kW solar panel costing
          $10,237 due to this.{" "}
        </p>
        <br />
        <p>
          Replace old appliances with energy-star approved, high-efficiency
          appliances. Although these appliances generally cost more than
          low-efficiency alternatives, they will also use less energy to perform
          the same tasks, reducing your energy bill. You can easily find these
          appliances on the Energy Star website. You can also find them anywhere
          you buy appliances, just look for the energy-star sticker. Examples:
        </p>
        <ul className="list-inside list-disc">
          <li className="list-item">
            Qualified furnaces offer a rating of 90% AFUE or greater, which is
            about 15% more efficient than the minimum federal efficiency
            standard. If you live in the Northern region of America, you can
            save an average of $80 a year.
          </li>
          <li className="list-item">
            Qualified refrigerators are at least 15% more efficient than the
            minimum federal efficiency standard.
          </li>
          <li className="list-item">
            Find more at{" "}
            <a
              className="underline text-blue-400"
              href="https://www.energystar.gov/products/spec"
            >
              the energy star website
            </a>
            .
          </li>
        </ul>
        <br />
        <p>
          You can get a discount on improving your house and help lessen your
          environmental footprint on Earth by utilizing the IRS’s green tax
          rebates. By upgrading key elements of your primary home, you can be
          eligible for many tax rebates. Here are some of them:
        </p>
        <li className="list-item">
          Energy-efficient furnace or air conditioner: 30% of cost, up to $600{" "}
        </li>
        <li className="list-item">
          Energy-efficient water heaters: 30% of cost, up to $600{" "}
        </li>
        <li className="list-item">
          Electric panel or circuit upgrades: 30% of cost, up to $600{" "}
        </li>
        <li className="list-item">
          Heat pumps and heat pump water heaters: 30% of cost, up to $2,000{" "}
        </li>
        <li className="list-item">
          Biomass stoves and biomass boilers: 30% of cost, up to $2,000{" "}
        </li>
        <li className="list-item">Insulation: 30% of cost </li>
        <li className="list-item">
          Windows (including skylights): 30% of cost, up to $600{" "}
        </li>
        <li className="list-item">
          Exterior Doors: 30% of cost, limit of $250 per door or $500 total Home
          energy audits: 30% of cost, up to $150{" "}
        </li>

        <br />
        <p>
          It is essential for everyone to make the most of the resources
          available to them. Whether you are in Washington State, the broader
          US, or any other region, there are specific energy programs and
          initiatives that can positively impact both the environment and your
          own well-being. In this website, we will note some US and Washington
          State-specific options to work as examples explore some of these
          options.
        </p>
        <ul className="list-inside list-disc">
          <li className="list-item">
            Puget Sound Energy (PSE): As a major utility company in the Pacific
            Northwest region, PSE offers several green energy options. Consider
            participating in their Community Solar program, where you can
            subscribe to solar energy generated from local installations. Energy
            credits are provided based on your share of the solar energy
            produced, which can help offset your electricity bills1.
            Additionally, PSE provides rebates and incentives for
            energy-efficient home improvements, such as upgrading to ENERGY
            STAR® equipment or converting from electric to natural gas heating.
          </li>
          <li className="list-item">
            State Clean Energy Grants: The Washington State Department of
            Commerce offers clean energy grants to public utilities, cities,
            tribes, and school districts. These grants support various
            technologies, including microgrids, solar panels, and battery
            storage.
          </li>
          <li className="list-item">
            Federal Tax Credits: Under the Bipartisan Budget Act of 2018,
            several tax credits for residential energy efficiency were renewed.
            These credits apply to home improvements like insulation, efficient
            windows, and solar installations.
          </li>
          <li className="list-item">
            Inflation Reduction Act (IRA): The 2022 IRA offers federal tax
            credits for energy efficiency and renewable energy adoption. These
            credits can complement already existing programs as well, allowing
            you to combine incentives and rebates to maximize savings.
          </li>
        </ul>
        <p>
          Remember that every small step counts. By participating in both local,
          regional, and global energy programs, you not only contribute to a
          greener future but also potentially benefit from tax credits. Explore
          the options available in your area and make informed choices to
          support sustainability!
        </p>
      </>
    ),
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Use even more green technology",
    description: (
      <>
        <p>
          Install a programmable thermostat, which can automatically adjust the
          temperature in your home according to your schedule and preferences.
          You can control it remotely with your smartphone or computer. Who does
          not like to change their house&#39;s heat from the touch of a button,
          rather than having to walk all the way downstairs to manually change
          the heat? Furthermore, a programmable thermostat can help you save up
          to 10% on your heating and cooling costs per year.{" "}
        </p>
        <br />
        <p>
          Use a power strip for your electronics and appliances and turn it off
          when they are not in use. Many devices consume energy even when they
          are switched off or in standby mode, which is known as phantom load or
          vampire power. Power strips can help you eliminate this waste and save
          up to $100 per year on your electricity bill.
        </p>
        <br />
        <p>
          Switch to LED light bulbs, which use up to 80% less energy than
          incandescent bulbs and last longer. LED bulbs also produce less heat,
          which can help lower your cooling costs in the summer. You can find a
          variety of LED bulbs at your local hardware store or online. Switching
          to LED lights has more advantages than you think, here is a list of
          some:
        </p>
        <ul className="list-inside list-disc">
          <li className="list-item">
            Energy Efficiency: Since LED lights are more efficient than
            incandescent bulbs and last longer, it means that you, as a
            homeowner, do not have to spend as much money or time changing or
            replacing these bulbs.
          </li>
          <li className="list-item">
            Durability: LED lights are also more durable to resistance and
            shocks, allowing you to be safe and not have to worry about your
            lights ever exploding or breaking.{" "}
          </li>
          <li className="list-item">
            Dimmability: Many LED lights are dimmable, meaning that homeowners
            can easily dim these lights to the brightness that they want.
            Seemingly a niche feature, this can come in handy for many reasons:
            It can help reduce eye strain and increase the longevity of the LED.{" "}
          </li>
        </ul>
        <br />
        <p>
          Insulation is material used to decrease the heat transfer between the
          inside and outside of a house. Types of insulation include batts,
          rolls, loose fill, sprayed or foamed-in-place, rigid insulation,
          reflective insulation, and radiant barrier. - On average, you can
          expect to save up to 20% on your home&#39;s heating and cooling costs
          by implementing home insulation and fixing air leaks in your house.
        </p>
      </>
    ),
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Natural ways to Save the World",
    description: (
      <>
        <p>
          Plant trees and plants in your garden or community that can provide
          shade, oxygen, and habitat for wildlife. Planting native species can
          help reduce the time, resources, and energy it takes to maintain the
          plant. The average cost to plant a tree is $300, but can range
          anywhere from $150 to $1,850. There is no specific tax rebate on
          planting trees in your garden or community. By increasing the
          aesthetic appeal of your property, your property value might go up,
          equaling more money ($). By having better air quality around your
          house, you and your family can have a longer lifespan and maintain
          healthy lives.{" "}
        </p>
        <br />
        <p>
          Implement a geothermal heat pump to lessen your energy bill while
          contributing to the environment. Geothermal heat pumps rely on the
          fact that the temperature under the surface of the Earth (like caves
          and other naturally occurring below-ground spaces) remains at a
          relatively constant temperature. A geothermal system usually returns
          the additional initial cost it has over an air system in around 5 to
          10 years. The usage life of a geothermal system is around 24 years,
          meaning that a geothermal system is more effective in the long term.
          You can learn even more about this at{" "}
          <a
            className="underline text-blue-400"
            href="https://www.energy.gov/energysaver/geothermal-heat-pumps"
          >
            energy.gov
          </a>
          .
        </p>
        <p>
          Collect rainwater to reduce your water bill, while preventing
          contamination and reducing energy consumption. Typically, rainwater
          collection systems collect water from a house&#39;s roof and store it
          in a reserve. Homeowners can use this water in a variety of ways,
          including potable water (after filtration), outdoor use, and indoor
          non-potable water use. - In an average year, with the average American
          roof size of 1,700 sq ft, a homeowner can expect to collect about
          23,830 gallons of water in a year. By collecting that much water in a
          year, you could save $70 per year.
        </p>
      </>
    ),
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Round and Round: a Circular Economy",
    description: (
      <>
        <p>
          The circular economy represents a paradigm shift in our approach to
          production and consumption, aiming to move away from the linear
          &quot;take, make, dispose&quot; model. At its core, this
          transformative concept focuses on creating a closed-loop system where
          resources are continually reused, refurbished, and recycled. By
          design, the circular economy minimizes waste and champions
          sustainability throughout the entire product lifecycle.
        </p>
        <br />
        <p>
          Circular Economy Principles: In the circular economy, waste reduction
          takes precedence, prompting the design of products with durability and
          recyclability in mind. This approach extends to the repair,
          refurbishment, and reconditioning of goods to prolong their
          usefulness. Central to the concept is the regeneration of natural
          resources, advocating for the continuous reuse of materials to
          diminish the need for new resource extraction. The implementation of
          closed-loop systems ensures that products are easily disassembled, and
          materials are systematically recovered for future use, fostering
          resource efficiency.
        </p>
        <br />
        <p>
          Benefits and Impacts- The benefits of the circular economy are
          far-reaching. Environmentally, it contributes to the preservation of
          ecosystems, reduction of energy consumption, and mitigation of the
          environmental toll associated with traditional production and disposal
          methods. Economically, the circular economy stimulates growth by
          creating new business opportunities, generating employment in
          recycling and remanufacturing, and fostering innovation in sustainable
          technologies. Furthermore, it enhances resilience to global
          disruptions by promoting local sourcing and diversifying supply
          chains.{" "}
        </p>
        <br />
        <p>
          By encouraging consumer awareness and responsible choices, the
          circular economy empowers individuals to actively contribute to a more
          sustainable and regenerative future. Embracing these principles
          ensures a healthier planet and a higher quality of life for present
          and future generations.
        </p>
      </>
    ),
    image:
      "https://images.unsplash.com/photo-1572249955867-42637a662836?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "The small things matter",
    description: (
      <>
        <p>
          Simply changing our daily habits can be one of the most effective ways
          to combat climate change. Here are some ideas to get you started:
        </p>
        <ul className="list-inside list-disc">
          <li className="list-item">
            Reduce your water usage by taking shorter showers, fixing leaks,
            using low-flow faucets and showerheads, and not leaving the tap
            running when brushing, washing the dishes, etc.{" "}
          </li>
          <li className="list-item">
            Recycle your waste materials such as paper, plastic, metal, and
            glass, and compost your organic waste such as food scraps and yard
            trimmings. Ensure that everything goes where it is supposed to and
            is not in the opposite bin (i.e. a non-recyclable object going into
            a recycling bin) as this can do more harm than good, as it can
            render entire batches useless. This is known as “Wishcycling”{" "}
          </li>
          <li className="list-item">
            Buy local and organic products that have a lower environmental
            impact and support sustainable agriculture. This can help improve
            your health as well.{" "}
          </li>
          <li className="list-item">
            Avoid single-use items such as plastic bags, bottles, cups, and
            straws, and opt for reusable alternatives such as cloth bags, water
            bottles, mugs, and metal straws. This can help save you some costs
            in the long run as well, as you don’t have to repeatedly buy these
            single-use items.{" "}
          </li>
          <li className="list-item">
            Drive less and use public transportation, biking, walking, or
            carpooling whenever possible. If you own a car, choose a
            fuel-efficient, hybrid, or electric model and maintain it regularly.{" "}
          </li>
          <li className="list-item">
            Educate yourself and others about the causes and effects of climate
            change and the actions you can take to mitigate it.{" "}
          </li>
          <li className="list-item">
            Turn off the lights after leaving a room and completely unplug
            appliances that are not in use.{" "}
          </li>
          <li className="list-item">
            Lower the thermostat every night or while leaving for a vacation to
            significantly decrease energy consumption.{" "}
          </li>
        </ul>
      </>
    ),
    image:
      "https://images.unsplash.com/photo-1682695796954-bad0d0f59ff1?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Conclusion",
    description: (
      <p>
        Climate change is a serious and urgent issue that affects us all. It is
        caused by the accumulation of greenhouse gases in the atmosphere, mainly
        from burning fossil fuels. However, there are also many solutions that
        we can implement to reduce our emissions and mitigate the impacts of
        global warming. In this website, we have discussed some of these
        solutions, such as the Energy Star program, which helps consumers and
        businesses save energy and money while protecting the environment. We
        have also suggested some daily habits that one can adopt to lower their
        carbon footprint, such as using public transportation, recycling, and
        more. These actions may seem small, but if we all do our part, we can
        make a big difference. We have the power and the responsibility to shape
        a better future for ourselves and the generations to come. Let&apos;s
        act now and together we can fight climate change!
      </p>
    ),
    image:
      "https://images.unsplash.com/photo-1707344088547-3cf7cea5ca49?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default Opportunities;
