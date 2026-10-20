import Image from "next/image";

const companies = [
  { name: "Hope for Justice", image: "/clients/hope-for-justice.png", width: 930, height: 930 },
  { name: "Habesha Beer", image: "/clients/habesha-beer.webp", width: 1366, height: 1366 },
  { name: "Santim Pay", image: "/clients/santim-pay.jpeg", width: 1280, height: 1006 },
  { name: "INSA", image: "/clients/insa.jpg", width: 447, height: 447 },
  { name: "UNECA", image: "/clients/uneca.webp", width: 320, height: 320 },
  { name: "JDC", image: "/clients/jdc.jpg", width: 1000, height: 1000 },
] as const;

export function TrustedCompanies() {
  return (
    <section className="trusted-companies" aria-labelledby="trusted-companies-title">
      <div className="wrap trusted-companies-heading">
        <p className="creative-label">05 / OUR CLIENTS</p>
        <h2 id="trusted-companies-title">COMPANIES THAT <em>TRUSTED US.</em></h2>
      </div>
      <div className="trusted-companies-window" tabIndex={0} aria-label="Client logos scrolling automatically">
        <div className="trusted-companies-track">
          {[0, 1].map((copy) => (
            <div className="trusted-companies-set" key={copy} aria-hidden={copy === 1 ? true : undefined}>
              {companies.map((company) => (
                <div className="trusted-companies-logo" key={company.name}>
                  <Image src={company.image} alt={copy === 0 ? company.name + " logo" : ""} width={company.width} height={company.height} sizes="(max-width: 640px) 132px, 180px" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
