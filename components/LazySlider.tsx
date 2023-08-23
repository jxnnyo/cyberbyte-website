import dynamic from "next/dynamic";

const LazySlider = dynamic(() => import("./Slider"));

export default LazySlider;
