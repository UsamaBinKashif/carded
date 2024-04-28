import clsx from "clsx";
import styles from "./utils/style";
import {
  Navbar,
  Billing,
  CardDeal,
  Business,
  Client,
  CTA,
  Stats,
  Footer,
  Testimonial,
  Hero,
} from "./components";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={clsx(styles.paddingX, styles.flexCenter)}>
        <div className={clsx(styles.boxWidth)}>
          <Navbar />
        </div>
      </div>

      <div className={clsx("bg-primary", styles.flexStart)}>
        <div className={clsx(styles.boxWidth)}>
          <Hero />
        </div>
      </div>

      <div className={clsx("bg-primary", styles.paddingX, styles.flexStart)}>
        <div className={clsx(styles.boxWidth)}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonial />
          <Client/>
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
