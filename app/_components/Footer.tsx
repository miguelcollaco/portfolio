import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer className="border-t border-border py-6 pl-7 md:pl-23">
      <Reveal>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Miguel Collaço. All rights reserved.
        </p>
      </Reveal>
    </footer>
  );
}
