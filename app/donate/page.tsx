import Navbar from "@/components/ui/navbar";
import OrganizationCard from "./org";

const DonatePage = () => {
  return (
    <>
      <Navbar className="top-2 border-zinc-800 border-2 rounded-full" />
      <div className="relative w-full h-full">
        <div className="relative top-[120px]">
          <h1 className="relative text-center text-5xl font-bold mb-4">
            Reputable Charities
          </h1>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] xl:grid-cols-5 gap-4">
            <OrganizationCard
              image="/imgs/cec.png"
              summary="Santa Barbara-based organization that identifies, advocates, and raises awareness about the most pressing environmental issues in the region"
              name="Community Environmental Council"
              link="https://cecsb.org/"
            />
            <OrganizationCard
              image="/imgs/defense.jpeg"
              summary="Works to solve the most critical environmental problems facing the planet. Its mission is to preserve the natural systems on which all life depends"
              name="Environmental Defense Fund"
              link="https://www.edf.org/"
            />
            <OrganizationCard
              image="/imgs/greenpeace.png"
              summary="An international organization that campaigns for solutions to environmental problems. It is known for its direct actions and has been involved in several high-profile campaigns"
              name="Greenpeace"
              link="https://www.greenpeace.org/international/"
            />
            <OrganizationCard
              image="/imgs/rainforest.png"
              summary="A nonprofit that works to protect the rainforest and the rights of indigenous people. The organization works to maintain critical natural areas that act as carbon sinks"
              name="Rainforest Foundation US"
              link="https://rainforestfoundation.org/"
            />
            <OrganizationCard
              image="/imgs/well_done.jpeg"
              summary="A nonprofit that plugs orphan oil and gas wells, resulting in the immediate elimination of greenhouse gas emissions. Fighting climate change, one well at a time"
              name="Well Done Foundation"
              link="https://welldonefoundation.org/"
            />
            <OrganizationCard
              image="/imgs/350.jpeg"
              summary="A global grassroots organization that works to end the use of fossil fuels and build a world of community-led renewable energy for all"
              name="350.org"
              link="https://350.org/us-homepage/"
            />
            <OrganizationCard
              image="/imgs/cleanAir.jpeg"
              summary="A nonprofit that works to reduce atmospheric pollution through research, advocacy, and private-sector collaboration"
              name="Clean Air Task Force"
              link="https://www.catf.us/"
            />
            <OrganizationCard
              image="/imgs/climate.png"
              summary="Provides funding to grassroots organizations working to address the climate crisis. The organization primarly supports marginalized groups"
              name="Climate Emergency Fund "
              link="https://www.climateemergencyfund.org/"
            />
            <OrganizationCard
              image="/imgs/cool_earth.png"
              summary="protects rainforests and other ecosystems critical to the planet's health. The organization works with local communities to embolden innovators"
              name="Cool Earth"
              link="https://www.coolearth.org/"
            />
            <OrganizationCard
              image="/imgs/nature.png"
              summary="Works to protect the lands and waters on which all life depends. The organization focuses on climate change, land conservation, and water conservation"
              name="The Nature Conservancy"
              link="https://preserve.nature.org/page/119497/donate/1"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DonatePage;
