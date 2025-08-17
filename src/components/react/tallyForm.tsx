import { useEffect } from "react";
const tallySrc = import.meta.env.VITE_TALLY_SRC;

const TallyForm: React.FC = () => {
  useEffect(() => {
    const d = document;
    const w = "https://tally.so/widgets/embed.js";

    const v = () => {
      if (typeof (window as any).Tally !== "undefined") {
        (window as any).Tally.loadEmbeds();
      } else {
        const iframes = d.querySelectorAll<HTMLIFrameElement>(
          'iframe[data-tally-src]:not([src])'
        );
        iframes.forEach((e) => {
          if (e.dataset.tallySrc) {
            e.src = e.dataset.tallySrc;
          }
        });
      }
    };

    if (typeof (window as any).Tally !== "undefined") {
      v();
    } else if (!d.querySelector(`script[src="${w}"]`)) {
      const s = d.createElement("script");
      s.src = w;
      s.onload = v;
      s.onerror = v;
      d.body.appendChild(s);
    }
  }, []);

  return (
    <iframe
      data-tally-src={tallySrc}
      loading="lazy"
      width="100%"
      height="276"
      frameBorder="0"
      marginHeight={0}
      marginWidth={0}
      title="Formulario de contacto"
    />
  );
};

export default TallyForm;
