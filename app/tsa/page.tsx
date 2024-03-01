import Navbar from "@/components/ui/navbar";

const tsa = () => {
  return (
    <main className="w-full h-full mx-10 flex">
      <Navbar className="top-2 border-zinc-800 border-2 rounded-full" />

      <div className="flex align-middle justify-center flex-col">
        <p className="text-white">
          All images are either taken from Upsplash, which has a free commercial
          and noncommercial use policy, or are handmade.
        </p>
        <br />
        Sources:
        <ul className="list-inside list-disc">
          <li className="list-item">
            https://www.weforum.org/agenda/2021/12/jobs-renewable-energy-fossil-fuels/
          </li>
          <li className="list-item">
            https://www.weforum.org/agenda/2022/03/the-clean-energy-employment-shift-by-2030/
          </li>
          <li className="list-item">
            https://equitablegrowth.org/green-jobs-are-good-for-u-s-workers-and-the-u-s-economy/
          </li>
          <li className="list-item">
            https://www.weforum.org/agenda/2022/07/renewable-energy-jobs-us/
          </li>
          <li className="list-item">
            https://www.energy.gov/eere/why-clean-energy-matters/
          </li>
          <li className="list-item">
            https://www.energy.gov/eere/environmental-impacts-clean-energy/
          </li>
          <li className="list-item">
            https://www.energy.gov/eere/health-and-safety-benefits-clean-energy/
          </li>
          <li className="list-item">
            https://www.sustainable-energyacademy.org.uk/
          </li>
        </ul>
        <br />
        <a
          className="underline text-blue-400"
          href="./plan-of-work-log-tsa.pdf"
          download
        >
          Download Work Log
        </a>
        <a
          className="underline text-blue-400"
          href="./student-copyright-checklist-tsa.pdf"
          download
        >
          Download Student Copyright Checklist
        </a>
      </div>
    </main>
  );
};

export default tsa;
