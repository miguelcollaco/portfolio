export default function Footer() {
  return (
    <footer className="border-t border-border py-6 pl-7 md:pl-23">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Miguel Collaço. All rights reserved.
      </p>
    </footer>
  );
}
