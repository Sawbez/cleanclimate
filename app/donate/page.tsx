import Navbar from "@/components/ui/navbar";
import OrganizationCard from "./org";

const IndexPage = () => {
	return (
		<div className="w-full h-full">
			<Navbar className="top-2 border-zinc-800 border-2 rounded-full" />
			<div className="relative top-[120px]">
				<h1 className="relative text-center text-5xl font-bold mb-4">
					Reputable Charities
				</h1>
				<div className="grid grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] xl:grid-cols-5 gap-4">
					<OrganizationCard
						image="/imgs/cec.png"
						name="Community Environmental Council"
						link="https://cecsb.org/"
					/>
					<OrganizationCard
						image="/imgs/defense.jpeg"
						name="Environmental Defense Fund"
						link="https://www.edf.org/"
					/>
					<OrganizationCard
						image="/imgs/greenpeace.png"
						name="Greenpeace"
						link="https://www.greenpeace.org/international/"
					/>
					<OrganizationCard
						image="/imgs/rainforest.png"
						name="Rainforest Foundation US"
						link="https://rainforestfoundation.org/?segmentCode=GADG00&utm_source=Google&utm_medium=AdGrant_CPC&gad_source=1"
					/>
					<OrganizationCard
						image="/imgs/well_done.jpeg"
						name="Well Done Foundation"
						link="https://welldonefoundation.org/?source=google&medium=cpc&campaign=brand&content=previous2&gad_source=1"
					/>
					<OrganizationCard
						image="/imgs/350.jpeg"
						name="350.org"
						link="https://350.org/us-homepage/"
					/>
					<OrganizationCard
						image="/imgs/cleanAir.jpeg"
						name="Clean Air Task Force"
						link="https://www.catf.us/"
					/>
					<OrganizationCard
						image="/imgs/climate.png"
						name="Climate Emergency Fund "
						link="https://www.climateemergencyfund.org/"
					/>
					<OrganizationCard
						image="/imgs/cool_earth.png"
						name="Cool Earth"
						link="https://www.coolearth.org/"
					/>
					<OrganizationCard
						image="/imgs/nature.png"
						name="The Nature Conservancy"
						link="https://preserve.nature.org/page/119497/donate/1?ea.profile.id=32594&en_txn1=p_g.dfa.fd.x.dtd.br.202401&supporter.appealCode=AHOMQONLN01W1SXX01&en_txn8=NewSch.ADPCGO2401PDNZNZZD01Z02-BZUZZ-DGAQ&gad_source=1&gclsrc=ds"
					/>
				</div>
			</div>
		</div>
	);
};

export default IndexPage;
