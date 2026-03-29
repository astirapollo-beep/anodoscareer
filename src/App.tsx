import { useMemo, useState } from "react";
import {
  Mail,
  Globe,
  School,
  UserRound,
  GraduationCap,
  ChevronRight,
  Compass,
  Briefcase,
  ClipboardList,
  LineChart,
} from "lucide-react";

const paths = [
  {
    id: "stem",
    title: "Θετικές Επιστήμες & Τεχνολογία",
    audience: "Για μαθητές που αγαπούν λογική, επίλυση προβλημάτων και πρακτική εφαρμογή.",
    studies: ["Πληροφορική", "Ηλεκτρολόγων Μηχανικών", "Μαθηματικά", "Data Science"],
    jobs: ["Software Engineer", "Data Analyst", "Cybersecurity Specialist"],
    skills: ["Αναλυτική σκέψη", "Υπομονή", "Λογική", "Συνεχής μάθηση"],
  },
  {
    id: "health",
    title: "Υγεία & Βιοεπιστήμες",
    audience: "Για όσους θέλουν να προσφέρουν και ενδιαφέρονται για τον άνθρωπο.",
    studies: ["Ιατρική", "Νοσηλευτική", "Φαρμακευτική", "Βιολογία"],
    jobs: ["Ιατρός", "Νοσηλευτής", "Φαρμακοποιός"],
    skills: ["Ενσυναίσθηση", "Πειθαρχία", "Ακρίβεια", "Αντοχή"],
  },
  {
    id: "business",
    title: "Οικονομία & Διοίκηση",
    audience: "Για άτομα που σκέφτονται οργανωμένα και βλέπουν ευκαιρίες.",
    studies: ["Οικονομικά", "Διοίκηση Επιχειρήσεων", "Λογιστική", "Marketing"],
    jobs: ["Οικονομολόγος", "Λογιστής", "HR Specialist"],
    skills: ["Οργάνωση", "Επικοινωνία", "Στρατηγική"],
  },
];

const serviceCards = [
  {
    title: "Για μαθητές",
    text: "Ξεκάθαρη κατεύθυνση για σπουδές, επαγγέλματα και επόμενα βήματα.",
    icon: School,
  },
  {
    title: "Για γονείς",
    text: "Υποστήριξη στη λήψη σωστών αποφάσεων χωρίς πίεση και θόρυβο.",
    icon: UserRound,
  },
  {
    title: "Για σχολεία",
    text: "Ομιλίες και workshops επαγγελματικού προσανατολισμού με σύγχρονη δομή.",
    icon: GraduationCap,
  },
];

const offerings = [
  {
    title: "Επαγγελματικός Προσανατολισμός",
    headline: "Ανακάλυψε τον δρόμο που σου ταιριάζει!",
    text: "Η επιλογή σπουδών και κατεύθυνσης είναι από τις πιο σημαντικές αποφάσεις. Με σωστή διερεύνηση ενδιαφερόντων, δεξιοτήτων και προοπτικών, η απόφαση γίνεται πιο καθαρή και πιο ασφαλής.",
  },
  {
    title: "Συμπλήρωση Μηχανογραφικού",
    headline: "Οι σωστές επιλογές σήμερα, ανοίγουν τους δρόμους του αύριο!",
    text: "Η συμπλήρωση του μηχανογραφικού δεν είναι αγγαρεία της τελευταίας στιγμής. Είναι στρατηγική απόφαση που χρειάζεται ενημέρωση, ιεράρχηση και καθαρό πλάνο.",
  },
  {
    title: "Συμβουλευτική για Μεταπτυχιακές Σπουδές",
    headline: "Το upgrade που αξίζει η καριέρα σου.",
    text: "Η επιλογή μεταπτυχιακού χρειάζεται στόχο και όχι απλώς έναν ακόμα τίτλο. Εξετάζουμε κατεύθυνση, επαγγελματική αξία, απαιτήσεις και το κατά πόσο σε πάει μπροστά ουσιαστικά.",
  },
  {
    title: "Συμβουλευτική Φοιτητών",
    headline: "Χτίσε το προφίλ σου για το αύριο!",
    text: "Η φοιτητική ζωή είναι η κατάλληλη στιγμή για να οργανώσεις το προφίλ σου. Από επιλογές κατεύθυνσης μέχρι δεξιότητες, πρακτική εμπειρία και επόμενα βήματα, βάζουμε σειρά στο χάος.",
  },
  {
    title: "Συμβουλευτική Σταδιοδρομίας Ενηλίκων",
    headline: "Γιατί ποτέ δεν είναι αργά να σχεδιάσεις το μέλλον σου!",
    text: "Η καριέρα δεν είναι ευθεία γραμμή. Αν χρειάζεσαι επαναπροσδιορισμό, αλλαγή πορείας ή πιο στοχευμένη επαγγελματική στρατηγική, η συμβουλευτική βοηθά να δεις καθαρά τις επόμενες κινήσεις.",
  },
];

function AnodosLogo({ compact = false }: { compact?: boolean }) {
  const logoHeightClass = compact ? "h-10 sm:h-11" : "h-24 sm:h-28 lg:h-32";

  return (
    <div className={`flex ${compact ? "items-center gap-3" : "flex-col items-center gap-4"}`}>
      <img
        src="/Anodos.png"
        alt="ANODOS Logo"
        className={`${logoHeightClass} w-auto object-contain`}
      />

      <div className={compact ? "text-left" : "text-center"}>
        <div
          className={`${compact ? "text-base sm:text-lg tracking-[0.18em]" : "text-3xl sm:text-5xl tracking-[0.22em]"} font-light text-[#7a3f98]`}
        >
          ANODOS
        </div>

        {!compact && (
          <p className="mt-2 text-[11px] sm:text-sm font-medium uppercase tracking-[0.16em] text-slate-600">
            Career Guidance &amp; Educational Consulting
          </p>
        )}
      </div>
    </div>
  );
}

function SectionTitle({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7a3f98]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">{title}</h2>
      <p className="mt-4 text-lg leading-8 text-slate-600">{text}</p>
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
      {children}
    </span>
  );
}

export default function App() {
  const [page, setPage] = useState("home");
  const [answers, setAnswers] = useState({ style: "", environment: "", motivation: "" });

  const navItems = [
    { id: "home", label: "Αρχική" },
    { id: "test", label: "Τεστ" },
    { id: "guidance", label: "Καριέρες" },
    { id: "contact", label: "Επικοινωνία" },
  ];

  const quizResult = useMemo(() => {
    const scores = { stem: 0, health: 0, business: 0 };

    if (answers.style === "logic") scores.stem += 2;
    if (answers.style === "people") scores.health += 2;
    if (answers.style === "organize") scores.business += 2;

    if (answers.environment === "lab") scores.stem += 1;
    if (answers.environment === "care") scores.health += 1;
    if (answers.environment === "office") scores.business += 1;

    if (answers.motivation === "solve") scores.stem += 1;
    if (answers.motivation === "help") scores.health += 1;
    if (answers.motivation === "lead") scores.business += 1;

    return Object.entries(scores)
      .sort((a, b) => b[1] - a[1])
      .map(([id]) => paths.find((p) => p.id === id))
      .filter(Boolean);
  }, [answers]);

  const HomePage = () => (
    <>
      <section className="bg-gradient-to-br from-[#7a3f98] via-[#8f5ab0] to-[#5dc7e2] py-20 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm backdrop-blur">
                <Compass className="h-4 w-4" />
                ANODOS • anodoscareer.gr
              </div>

              <div className="mt-8 flex justify-start">
                <div className="rounded-[2rem] bg-white/95 px-6 py-5 shadow-2xl">
                  <AnodosLogo />
                </div>
              </div>

              <h1 className="mt-10 text-4xl font-bold leading-tight sm:text-5xl">
                Βρες τη σωστή κατεύθυνση για σπουδές και καριέρα
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90">
                Σύγχρονος επαγγελματικός προσανατολισμός για μαθητές, γονείς, φοιτητές και σχολεία.
                Με πρακτικά εργαλεία, προσωπική καθοδήγηση και ξεκάθαρες επιλογές.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={() => setPage("test")}
                  className="rounded-xl bg-white px-6 py-3 font-semibold text-[#7a3f98] shadow-lg transition hover:-translate-y-0.5"
                >
                  Κάνε το τεστ
                </button>
                <button
                  onClick={() => setPage("contact")}
                  className="rounded-xl border border-white/70 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  Επικοινωνία
                </button>
              </div>
            </div>

            <div className="rounded-[2rem] bg-white p-8 text-slate-900 shadow-2xl">
              <p className="text-sm font-semibold text-[#7a3f98]">Τι θα πετύχεις με το ANODOS</p>
              <div className="mt-6 space-y-4">
                {[
                  [ClipboardList, "Σαφήνεια", "Θα δεις ποιες κατευθύνσεις σου ταιριάζουν πραγματικά."],
                  [Briefcase, "Ρεαλισμό", "Θα συνδέσεις ενδιαφέροντα με σπουδές και επαγγέλματα."],
                  [LineChart, "Πλάνο", "Θα ξέρεις τα επόμενα βήματα αντί να μαντεύεις."],
                ].map(([Icon, title, text]) => (
                  <div key={title} className="rounded-2xl bg-slate-50 p-4">
                    <div className="flex items-start gap-3">
                      <div className="rounded-xl bg-violet-100 p-2 text-[#7a3f98]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold">{title}</p>
                        <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionTitle
          eyebrow="Για ποιον είναι"
          title="Το ANODOS απευθύνεται σε όσους θέλουν καθαρή κατεύθυνση"
          text="Για μαθητές, γονείς και σχολεία που θέλουν λιγότερο μπέρδεμα και πιο σωστές αποφάσεις."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {serviceCards.map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.title} className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
                <div className="inline-flex rounded-2xl bg-violet-100 p-3 text-[#7a3f98]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold">{card.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{card.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <SectionTitle
          eyebrow="Υπηρεσίες"
          title="Υπηρεσίες συμβουλευτικής και καθοδήγησης"
          text="Πρόσθεσα τις υπηρεσίες που ζήτησες και άφησα έξω την αίτηση μετεγγραφής. Η λογική εδώ είναι καθαρή: τι προσφέρεις, σε ποιον απευθύνεται και γιατί έχει αξία."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {offerings.map((item) => (
            <div
              key={item.title}
              className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="inline-flex items-center rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#7a3f98]">
                {item.title}
              </div>
              <h3 className="mt-5 text-2xl font-bold leading-tight text-slate-900">{item.headline}</h3>
              <p className="mt-4 leading-7 text-slate-600">{item.text}</p>
              <button
                onClick={() => setPage("contact")}
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#7a3f98] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Ζήτησε πληροφορίες <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );

  const TestPage = () => (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <SectionTitle
        eyebrow="Τεστ"
        title="Σύντομο τεστ κατεύθυνσης"
        text="Ένα μικρό φίλτρο για να δεις προς τα πού γέρνεις περισσότερο."
      />

      <div className="mt-10 rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <div className="grid gap-8">
          <div>
            <p className="font-semibold">1. Πώς σκέφτεσαι πιο φυσικά;</p>
            <div className="mt-3 flex flex-wrap gap-3">
              {[
                ["logic", "Λογικά και αναλυτικά"],
                ["people", "Μέσα από ανθρώπους και σχέσεις"],
                ["organize", "Οργανωτικά και στρατηγικά"],
              ].map(([value, label]) => (
                <button
                  key={value}
                  onClick={() => setAnswers((prev) => ({ ...prev, style: value }))}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    answers.style === value ? "bg-[#7a3f98] text-white" : "bg-slate-100 text-slate-700"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="font-semibold">2. Πού σε φαντάζεσαι πιο άνετα;</p>
            <div className="mt-3 flex flex-wrap gap-3">
              {[
                ["lab", "Σε τεχνικό ή εργαστηριακό χώρο"],
                ["care", "Σε ρόλο βοήθειας και φροντίδας"],
                ["office", "Σε οργανωμένο επαγγελματικό περιβάλλον"],
              ].map(([value, label]) => (
                <button
                  key={value}
                  onClick={() => setAnswers((prev) => ({ ...prev, environment: value }))}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    answers.environment === value ? "bg-[#7a3f98] text-white" : "bg-slate-100 text-slate-700"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="font-semibold">3. Τι σε παρακινεί περισσότερο;</p>
            <div className="mt-3 flex flex-wrap gap-3">
              {[
                ["solve", "Να λύνω προβλήματα"],
                ["help", "Να βοηθάω ανθρώπους"],
                ["lead", "Να οργανώνω και να καθοδηγώ"],
              ].map(([value, label]) => (
                <button
                  key={value}
                  onClick={() => setAnswers((prev) => ({ ...prev, motivation: value }))}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    answers.motivation === value ? "bg-[#7a3f98] text-white" : "bg-slate-100 text-slate-700"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-[2rem] bg-slate-50 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7a3f98]">Αποτέλεσμα</p>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {quizResult.map((item) => (
              <div key={item?.id} className="rounded-2xl bg-white p-4 ring-1 ring-slate-200">
                <h3 className="font-bold">{item?.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item?.audience}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  const GuidancePage = () => (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <SectionTitle
        eyebrow="Κατευθύνσεις"
        title="Σπουδές και επαγγέλματα"
        text="Δες βασικούς επαγγελματικούς δρόμους και τι απαιτούν."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {paths.map((p) => (
          <div key={p.id} className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-xl font-bold">{p.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{p.audience}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.skills.map((s) => (
                <Badge key={s}>{s}</Badge>
              ))}
            </div>

            <div className="mt-5">
              <p className="text-sm font-semibold text-slate-800">Ενδεικτικές σπουδές</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.studies.map((s) => (
                  <Badge key={s}>{s}</Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  const ContactPage = () => (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <SectionTitle
        eyebrow="Επικοινωνία"
        title="Στείλε μήνυμα"
        text="Για συνεδρίες ή συνεργασία με σχολεία."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-[2rem] bg-slate-900 p-8 text-white">
          <h3 className="text-2xl font-bold">Στοιχεία επικοινωνίας</h3>
          <div className="mt-6 space-y-4 text-slate-200">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-[#5dc7e2]" />
              info@anodoscareer.gr
            </div>
            <div className="flex items-center gap-3">
              <Globe className="h-5 w-5 text-[#5dc7e2]" />
              anodoscareer.gr
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <div className="grid gap-4">
            <input className="rounded-xl border border-slate-200 px-4 py-3" placeholder="Όνομα" />
            <input className="rounded-xl border border-slate-200 px-4 py-3" placeholder="Email" />
            <textarea
              className="rounded-xl border border-slate-200 px-4 py-3"
              rows={5}
              placeholder="Μήνυμα"
            />
            <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#7a3f98] px-5 py-3 font-semibold text-white">
              Αποστολή <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <button onClick={() => setPage("home")} className="rounded-xl text-left transition hover:opacity-90">
            <AnodosLogo compact />
          </button>

          <nav className="flex flex-wrap gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setPage(item.id)}
                className={`text-sm font-semibold ${page === item.id ? "text-[#7a3f98]" : "text-slate-700"}`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main>
        {page === "home" && <HomePage />}
        {page === "test" && <TestPage />}
        {page === "guidance" && <GuidancePage />}
        {page === "contact" && <ContactPage />}
      </main>

      <footer className="mt-20 border-t bg-white py-6">
        <div className="text-center text-sm text-slate-500">© 2026 ANODOS • anodoscareer.gr</div>
      </footer>
    </div>
  );
}
