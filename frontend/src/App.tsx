import { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import {
  Landmark,
  HandHeart,
  CalendarDays,
  MapPin,
  Wallet,
  Users,
  LogIn,
  LogOut,
  UserPlus,
  User,
  Mail,
  LockKeyhole,
  Phone,
  IndianRupee,
  CalendarCheck,
  ArrowLeft,
  Home,
  BookOpen,
  ShieldCheck,
  HeartHandshake,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  Share2,
  Copy,
  X,
} from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

function SharePublicTempleDialog({
  open,
  publicUrl,
  copied,
  onClose,
  onCopy,
  onShare,
  onOpen,
}: {
  open: boolean;
  publicUrl: string;
  copied: boolean;
  onClose: () => void;
  onCopy: () => void;
  onShare: () => void;
  onOpen: () => void;
}) {
  if (!open) return null;

  return (
    <div
      role="presentation"
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "grid",
        placeItems: "center",
        padding: 20,
        background: "rgba(38,24,12,.62)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="share-public-temple-title"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "min(500px, 100%)",
          maxHeight: "92vh",
          overflowY: "auto",
          position: "relative",
          borderRadius: 28,
          padding: 28,
          background: "#fffdf8",
          border: "1px solid #ead9bc",
          boxShadow: "0 30px 100px rgba(42,25,10,.35)",
          color: "#332318",
        }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close share dialog"
          style={{
            position: "absolute",
            top: 14,
            right: 14,
            width: 38,
            height: 38,
            borderRadius: 12,
            border: "1px solid #ead9bc",
            background: "#fffaf1",
            color: "#6c4a28",
            cursor: "pointer",
            display: "grid",
            placeItems: "center",
          }}
        >
          <X size={18} />
        </button>

        <div style={{ textAlign: "center" }}>
          <div
            style={{
              width: 54,
              height: 54,
              margin: "0 auto 12px",
              borderRadius: 16,
              display: "grid",
              placeItems: "center",
              background: "linear-gradient(135deg,#f7e8ca,#efd3a2)",
              color: "#966020",
            }}
          >
            <Share2 size={25} />
          </div>

          <span
            style={{
              color: "#a66b22",
              fontSize: 11,
              fontWeight: 900,
              letterSpacing: ".14em",
            }}
          >
            PUBLIC TEMPLE
          </span>

          <h2
            id="share-public-temple-title"
            style={{ margin: "8px 0 7px", fontSize: 28 }}
          >
            Share Temple Transparency
          </h2>
          <p
            style={{
              margin: "0 auto 20px",
              maxWidth: 390,
              color: "#806c58",
              lineHeight: 1.55,
              fontSize: 14,
            }}
          >
            Share the public temple page with devotees. They can open the link
            directly or scan the QR code.
          </p>
        </div>

   <div
  style={{
    width: 280,
    height: 280,
    margin: "0 auto 12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#ffffff",
    borderRadius: 18,
    padding: 12,
    boxSizing: "border-box",
    overflow: "hidden",
    border: "1px solid #ead9bc",
  }}
>
  <QRCodeSVG
    value={publicUrl}
    size={250}
    level="H"
    includeMargin={true}
  />
</div>
        <div
          style={{
            fontSize: 11,
            color: "#8a7763",
            textAlign: "center",
            marginBottom: 10,
          }}
        >
          Scan to open <strong>/public-temple</strong>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: 10,
            borderRadius: 13,
            background: "#fff8ed",
            border: "1px solid #ead9bc",
          }}
        >
          <input
            readOnly
            aria-label="Public temple URL"
            value={publicUrl}
            onFocus={(e) => e.currentTarget.select()}
            style={{
              minWidth: 0,
              flex: 1,
              border: 0,
              outline: 0,
              background: "transparent",
              color: "#624324",
              fontSize: 12,
            }}
          />
          <button
            type="button"
            onClick={onCopy}
            style={{
              flexShrink: 0,
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              border: 0,
              borderRadius: 9,
              padding: "9px 11px",
              background: "#4f3219",
              color: "#fff",
              fontWeight: 800,
              cursor: "pointer",
            }}
          >
            <Copy size={14} />
            {copied ? "Copied" : "Copy link"}
          </button>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 10,
            marginTop: 12,
          }}
        >
          <button
            type="button"
            onClick={onShare}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 7,
              border: 0,
              borderRadius: 12,
              padding: "12px 14px",
              background: "linear-gradient(135deg,#a66b22,#c68a32)",
              color: "#fff",
              fontWeight: 900,
              cursor: "pointer",
            }}
          >
            <Share2 size={16} />
            Share link
          </button>

          <button
            type="button"
            onClick={onOpen}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 7,
              border: "1px solid #d9c19d",
              borderRadius: 12,
              padding: "12px 14px",
              background: "#fffaf1",
              color: "#6c461e",
              fontWeight: 900,
              cursor: "pointer",
            }}
          >
            <ChevronRight size={16} />
            Open Public Page
          </button>
        </div>

        <button
          type="button"
          onClick={onClose}
          style={{
            width: "100%",
            marginTop: 10,
            border: "1px solid #ead9bc",
            borderRadius: 12,
            padding: "10px 14px",
            background: "transparent",
            color: "#806c58",
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          Close
        </button>

        <p
          style={{
            margin: "13px 0 0",
            color: "#9a8876",
            fontSize: 11,
            lineHeight: 1.5,
            textAlign: "center",
          }}
        >
          The URL always points to the current origin plus <b>/public-temple</b>.
          On a deployed HTTPS site, the shared link will also use HTTPS.
        </p>
      </div>
    </div>
  );
}

function App() {
  const path = window.location.pathname;

  const [bookings, setBookings] = useState<any[]>([]);
  const [sharePublicOpen, setSharePublicOpen] = useState(false);
  const [shareCopied, setShareCopied] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [members, setMembers] = useState<any[]>([]);
  const [memberSearch, setMemberSearch] = useState("");
  const [memberFormOpen, setMemberFormOpen] = useState(false);
  const [editingMember, setEditingMember] = useState<any | null>(null);
  const [memberFormWithFamily, setMemberFormWithFamily] = useState(false);
  const [familyFormOpen, setFamilyFormOpen] = useState(false);
  const [familyParent, setFamilyParent] = useState<any | null>(null);
  const [familyDrafts, setFamilyDrafts] = useState<any[]>([]);
  
  const [events, setEvents] = useState<any[]>([]);
  const [eventsLoading, setEventsLoading] = useState(true);
  
const [dashboardStats, setDashboardStats] = useState({
  totalBookings: 0,
  todayPoojas: 0,
  upcomingEvents: 0,
  devotees: 0,
  donationTotal: 0,
  totalRatings: 0,
  averageRating: 0,
});

const [statsLoading, setStatsLoading] = useState(true);


  const goTo = (url: string) => {
    window.location.href = url;
  };

  const publicTempleUrl = `${window.location.origin}/public-temple`;

  const copyPublicTempleLink = async () => {
    try {
      await navigator.clipboard.writeText(publicTempleUrl);
      setShareCopied(true);
      window.setTimeout(() => setShareCopied(false), 1800);
    } catch {
      window.prompt("Copy this public temple link:", publicTempleUrl);
    }
  };

  const sharePublicTemple = async () => {
    const shareData = {
      title: "Temple Management — Public Temple",
      text: "View the temple's public donations, events and pooja services.",
      url: publicTempleUrl,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        return;
      }

      await navigator.clipboard.writeText(publicTempleUrl);
      setShareCopied(true);
      window.setTimeout(() => setShareCopied(false), 1800);
      alert("Public temple link copied. You can paste it anywhere to share.");
    } catch (error: any) {
      if (error?.name !== "AbortError") {
        await copyPublicTempleLink();
      }
    }
  };

  const isLoggedIn =
  localStorage.getItem("templeLoggedIn") === "true";
  const [donations,setDonations]=useState<any[]>([]);
  const loadDonations = async () => {
  try {
    const response = await fetch(`${API_URL}/api/donations`);

    if (!response.ok) {
      throw new Error("Failed to load donations");
    }

    const data = await response.json();

    setDonations(data.donations || []);
  } catch (error) {
    console.error("Failed to load donations:", error);
  }
};

// ===============================
// LOAD EVENTS
// ===============================
useEffect(() => {
  if (!isLoggedIn) return;

  
  const loadEvents = async () => {
    try {
      setEventsLoading(true);

      const response = await fetch(
        `${API_URL}/api/events`
      );

      if (!response.ok) {
        throw new Error("Failed to load events");
      }

      const data = await response.json();

      setEvents(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Events loading error:", error);
      setEvents([]);
    } finally {
      setEventsLoading(false);
    }
  };

  loadEvents();
  
}, [isLoggedIn]);

useEffect(() => {
  loadDonations();
  try {
    const savedMembers = JSON.parse(localStorage.getItem("templeMembers") || "[]");
    const normalizedMembers = Array.isArray(savedMembers)
      ? savedMembers.map((member) => ({
          ...member,
          familyMemberName: String(member.familyMemberName || member.name || "").trim(),
          name: String(member.familyMemberName || member.name || "").trim(),
        }))
      : [];
    setMembers(normalizedMembers);
  } catch { setMembers([]); }
}, []);

const saveMembers = (nextMembers: any[]) => {
  setMembers(nextMembers);
  localStorage.setItem("templeMembers", JSON.stringify(nextMembers));
};

const createFamilyDraft = () => ({
  id: `DRAFT-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
  name: "",
  relation: "",
  phone: "",
  work: "Other",
  customWork: "",
  expectedAmount: 0,
  paidAmount: 0,
});

const openMemberForm = (member: any | null = null, withFamily = false) => {
  setEditingMember(member);
  setMemberFormWithFamily(withFamily);
  if (withFamily && !member) {
    setFamilyDrafts([]);
  } else {
    setFamilyDrafts([]);
  }
  setMemberFormOpen(true);
};

const closeMemberForm = () => {
  setEditingMember(null);
  setMemberFormWithFamily(false);
  setFamilyDrafts([]);
  setMemberFormOpen(false);
};

const openFamilyForm = (member: any) => {
  setFamilyParent(member);
  setFamilyFormOpen(true);
};

const closeFamilyForm = () => {
  setFamilyParent(null);
  setFamilyFormOpen(false);
};

const submitFamilyMember = () => {
  if (!familyParent) return;
  const name = (document.getElementById("family-name") as HTMLInputElement)?.value.trim();
  if (!name) {
    alert("Please enter the family member name.");
    return;
  }

  const workSelect = (document.getElementById("family-work") as HTMLSelectElement)?.value || "Other";
  const customWork = (document.getElementById("family-work-custom") as HTMLInputElement)?.value.trim();
  const work = workSelect === "Other" ? (customWork || "Other") : workSelect;
  const expectedAmount = Math.max(0, Number((document.getElementById("family-expected") as HTMLInputElement)?.value || 0));
  const paidAmount = Math.max(0, Number((document.getElementById("family-paid") as HTMLInputElement)?.value || 0));

  if (paidAmount > expectedAmount && expectedAmount > 0) {
    alert("Amount given cannot be greater than the amount to be given.");
    return;
  }

  const familyMember = {
    id: `FAM-${Date.now()}`,
    name,
    relation: (document.getElementById("family-relation") as HTMLInputElement)?.value.trim() || "Family Member",
    phone: (document.getElementById("family-phone") as HTMLInputElement)?.value.trim() || "",
    work,
    expectedAmount,
    paidAmount,
    paymentStatus:
      expectedAmount > 0 && paidAmount >= expectedAmount
        ? "Paid"
        : paidAmount > 0
        ? "Partial"
        : "Not Given",
  };

  const next = members.map((item) =>
    item.id === familyParent.id
      ? { ...item, familyMembers: [...(Array.isArray(item.familyMembers) ? item.familyMembers : []), familyMember] }
      : item
  );
  saveMembers(next);
  closeFamilyForm();
};

const deleteFamilyMember = (parentId: string, familyId: string) => {
  if (!window.confirm("Remove this family member?")) return;
  saveMembers(
    members.map((item) =>
      item.id === parentId
        ? { ...item, familyMembers: (Array.isArray(item.familyMembers) ? item.familyMembers : []).filter((family: any) => family.id !== familyId) }
        : item
    )
  );
};

const submitMember = () => {
  const familyMemberName = (document.getElementById("member-name") as HTMLInputElement)?.value.trim();
  const name = familyMemberName;
  const phone = (document.getElementById("member-phone") as HTMLInputElement)?.value.trim();
  const email = (document.getElementById("member-email") as HTMLInputElement)?.value.trim();
  const type = (document.getElementById("member-type") as HTMLSelectElement)?.value || "Regular";
  const workSelect = (document.getElementById("member-work") as HTMLSelectElement)?.value || "Other";
  const customWork = (document.getElementById("member-work-custom") as HTMLInputElement)?.value.trim();
  const work = workSelect === "Other" ? (customWork || "Other") : workSelect;
  const joinedDate = (document.getElementById("member-date") as HTMLInputElement)?.value;
  const status = (document.getElementById("member-status") as HTMLSelectElement)?.value || "Active";
  const expectedAmount = Math.max(0, Number((document.getElementById("member-expected") as HTMLInputElement)?.value || 0));
  const paidAmount = Math.max(0, Number((document.getElementById("member-paid") as HTMLInputElement)?.value || 0));

  if (!name || !phone || !joinedDate) {
    alert("Please enter member name, phone number and joining date.");
    return;
  }

  if (paidAmount > expectedAmount && expectedAmount > 0) {
    alert("Amount given cannot be greater than the amount to be given.");
    return;
  }

  const combinedFamilyNames = memberFormWithFamily && !editingMember
    ? familyDrafts.map((draft: any) => {
        const expected = Math.max(0, Number(draft.expectedAmount || 0));
        const paid = Math.max(0, Number(draft.paidAmount || 0));
        const work = draft.work === "Other" ? (String(draft.customWork || "").trim() || "Other") : draft.work;
        return {
          id: `FAM-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
          name: String(draft.name || "").trim(),
          relation: String(draft.relation || "").trim() || "Family Member",
          phone: String(draft.phone || "").trim(),
          work,
          expectedAmount: expected,
          paidAmount: paid,
          paymentStatus:
            expected > 0 && paid >= expected
              ? "Paid"
              : paid > 0
              ? "Partial"
              : "Not Given",
        };
      })
    : (Array.isArray(editingMember?.familyMembers) ? editingMember.familyMembers : []);

  if (memberFormWithFamily && !editingMember) {
    const invalidFamily = familyDrafts.find((draft: any) => !String(draft.name || "").trim());
    if (invalidFamily) {
      alert("Please enter a name for every family member, or remove the empty family-member row.");
      return;
    }
    const invalidPayment = familyDrafts.find((draft: any) => Number(draft.paidAmount || 0) > Number(draft.expectedAmount || 0) && Number(draft.expectedAmount || 0) > 0);
    if (invalidPayment) {
      alert("A family member's amount given cannot be greater than the amount to give.");
      return;
    }
  }

  const member = {
    ...(editingMember || {}),
    id: editingMember?.id || `MEM-${Date.now()}`,
    name,
    familyMemberName,
    phone,
    email,
    type,
    work,
    joinedDate,
    status,
    expectedAmount,
    paidAmount,
    familyMembers: combinedFamilyNames,
    paymentStatus:
      expectedAmount > 0 && paidAmount >= expectedAmount
        ? "Paid"
        : paidAmount > 0
        ? "Partial"
        : "Not Given",
  };

  saveMembers(
    editingMember
      ? members.map((item) => item.id === editingMember.id ? member : item)
      : [member, ...members]
  );
  closeMemberForm();
};

const updateMemberPayment = (member: any, amount: number) => {
  const expected = Math.max(0, Number(member.expectedAmount || 0));
  const paid = Math.max(0, Number(amount || 0));

  if (expected > 0 && paid > expected) {
    alert(`Amount given cannot be more than ₹${expected.toLocaleString("en-IN")}.`);
    return;
  }

  const paymentStatus =
    expected > 0 && paid >= expected
      ? "Paid"
      : paid > 0
      ? "Partial"
      : "Not Given";

  saveMembers(
    members.map((item) =>
      item.id === member.id
        ? { ...item, paidAmount: paid, paymentStatus }
        : item
    )
  );
};

const recordMemberPayment = (member: any) => {
  const expected = Number(member.expectedAmount || 0);
  const currentPaid = Number(member.paidAmount || 0);
  const input = window.prompt(
    `Enter total amount given by ${member.name}:`,
    String(currentPaid)
  );

  if (input === null) return;

  const amount = Number(input);
  if (!Number.isFinite(amount) || amount < 0) {
    alert("Please enter a valid amount.");
    return;
  }

  if (expected > 0 && amount > expected) {
    alert(`Amount given cannot be more than ₹${expected.toLocaleString("en-IN")}.`);
    return;
  }

  updateMemberPayment(member, amount);
};

const markMemberPaid = (member: any) => {
  const expected = Number(member.expectedAmount || 0);
  if (expected <= 0) {
    alert("Set the amount to be given first.");
    return;
  }
  updateMemberPayment(member, expected);
};

const markMemberNotGiven = (member: any) => {
  updateMemberPayment(member, 0);
};

const updateFamilyPayment = (parent: any, family: any, amount: number) => {
  const expected = Math.max(0, Number(family.expectedAmount || 0));
  const paid = Math.max(0, Number(amount || 0));
  if (expected > 0 && paid > expected) {
    alert(`Amount given cannot be more than ₹${expected.toLocaleString("en-IN")}.`);
    return;
  }
  const paymentStatus =
    expected > 0 && paid >= expected
      ? "Paid"
      : paid > 0
      ? "Partial"
      : "Not Given";
  saveMembers(
    members.map((item) =>
      item.id === parent.id
        ? {
            ...item,
            familyMembers: (Array.isArray(item.familyMembers) ? item.familyMembers : []).map((f: any) =>
              f.id === family.id ? { ...f, paidAmount: paid, paymentStatus } : f
            ),
          }
        : item
    )
  );
};

const recordFamilyPayment = (parent: any, family: any) => {
  const currentPaid = Number(family.paidAmount || 0);
  const expected = Number(family.expectedAmount || 0);
  const input = window.prompt(`Enter total amount given by ${family.name}:`, String(currentPaid));
  if (input === null) return;
  const amount = Number(input);
  if (!Number.isFinite(amount) || amount < 0) {
    alert("Please enter a valid amount.");
    return;
  }
  if (expected > 0 && amount > expected) {
    alert(`Amount given cannot be more than ₹${expected.toLocaleString("en-IN")}.`);
    return;
  }
  updateFamilyPayment(parent, family, amount);
};

const markFamilyPaid = (parent: any, family: any) => {
  const expected = Number(family.expectedAmount || 0);
  if (expected <= 0) {
    alert("Set the amount to be given first.");
    return;
  }
  updateFamilyPayment(parent, family, expected);
};

const markFamilyNotGiven = (parent: any, family: any) => {
  updateFamilyPayment(parent, family, 0);
};

const deleteMember = (memberId: string) => {
  if (!window.confirm("Remove this temple member?")) return;
  saveMembers(members.filter((member) => member.id !== memberId));
};


const loadPublicData = async () => {
  try {
    const [eventsRes, donationsRes] = await Promise.all([
      fetch(`${API_URL}/api/events`),
      fetch(`${API_URL}/api/donations`),
    ]);

    if (eventsRes.ok) {
      const eventsData = await eventsRes.json();
      const publicEvents = Array.isArray(eventsData)
        ? eventsData
        : Array.isArray(eventsData?.events)
        ? eventsData.events
        : [];
      setEvents(publicEvents);
    }

    if (donationsRes.ok) {
      const donationsData = await donationsRes.json();
      const publicDonations = Array.isArray(donationsData)
        ? donationsData
        : Array.isArray(donationsData?.donations)
        ? donationsData.donations
        : [];
      setDonations(publicDonations);
    }
  } catch (error) {
    console.error("Public data loading error:", error);
  } finally {
    setEventsLoading(false);
  }
};

useEffect(() => {
  loadPublicData();
}, []);

// ===============================
// LOAD DASHBOARD DATA
// ===============================
useEffect(() => {
  if (!isLoggedIn) return;

  const loadDashboardData = async () => {
    try {
      setStatsLoading(true);

      const [statsRes, bookingsRes] = await Promise.all([
        fetch(`${API_URL}/api/dashboard/stats`),
        fetch(`${API_URL}/api/pooja-bookings`),
      ]);

      if (!statsRes.ok) {
        throw new Error("Failed to load dashboard statistics");
      }

      if (!bookingsRes.ok) {
        throw new Error("Failed to load bookings");
      }

      const stats = await statsRes.json();
      const bookingData = await bookingsRes.json();

      setDashboardStats({
        totalBookings: Number(stats.totalBookings || 0),
        todayPoojas: Number(stats.todayPoojas || 0),
        upcomingEvents: Number(stats.upcomingEvents || 0),
        devotees: Number(stats.devotees || 0),
       donationTotal: Number(stats.donationTotal || 0),
        totalRatings: Number(stats.totalRatings || 0),
        averageRating: Number(stats.averageRating || 0),
      });

    if (Array.isArray(bookingData)) {
  setBookings(bookingData);
} else if (Array.isArray(bookingData?.bookings)) {
  setBookings(bookingData.bookings);
} else {
  try {
    const saved = JSON.parse(
      localStorage.getItem("poojaBookings") || "[]"
    );

    setBookings(
      Array.isArray(saved) ? saved : []
    );
  } catch {
    setBookings([]);
  }
}
    } catch (error) {
      console.error("Dashboard loading error:", error);

      setDashboardStats({
        totalBookings: 0,
        todayPoojas: 0,
        upcomingEvents: 0,
        devotees: 0,
        donationTotal: 0,
        totalRatings: 0,
        averageRating: 0,
      });

    } finally {
      setStatsLoading(false);
    }
  };

  loadDashboardData();
}, [isLoggedIn]);



  const getDonationTotal = () => {
  

    return donations.reduce(
      (
        total: number,
        donation: { amount: number }
      ) =>
        total +
        Number(donation.amount || 0),
      0
    );
  };

  const getTodayPoojas = () => {
    const today = new Date()
      .toISOString()
      .split("T")[0];

    return bookings.filter(
      (booking: { date: string }) =>
        booking.date === today
    ).length;
  };

  const requireLogin = () => {
    if (!isLoggedIn) {
      goTo("/login");
      return false;
    }

    return true;
  };

  const getUserName = () =>
    localStorage.getItem("templeName") ||
    "Temple Administrator";

  const getUserEmail = () =>
    localStorage.getItem("templeEmail") || "";

  const logout = () => {
    localStorage.removeItem(
      "templeLoggedIn"
    );

    goTo("/login");
  };

  /* =====================================================
     LOGIN
  ===================================================== */

  if (path === "/login") {
    return (
      <div className="login-page">
        <div className="login-box">

          <div className="auth-icon">
            <Landmark size={32} />
          </div>

          <div className="auth-badge">
            <ShieldCheck size={14} />
            Secure Temple Access
          </div>

          <h1>Welcome Back</h1>

          <p>
            Sign in to manage your temple
            services and activities.
          </p>

          <div className="auth-field">
            <label>Email Address</label>

            <input
              id="login-email"
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="auth-field">
            <label>Password</label>

            <input
              id="login-password"
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="button"
            className="auth-primary-btn"
            onClick={() => {
              const email = (
                document.getElementById(
                  "login-email"
                ) as HTMLInputElement
              ).value.trim();

              const password = (
                document.getElementById(
                  "login-password"
                ) as HTMLInputElement
              ).value;

              const registeredEmail =
                localStorage.getItem(
                  "templeEmail"
                );

              const registeredPassword =
                localStorage.getItem(
                  "templePassword"
                );

              if (!email || !password) {
                alert(
                  "Please enter your email and password."
                );
                return;
              }

              if (
                !registeredEmail ||
                !registeredPassword
              ) {
                alert(
                  "No account found. Please register first."
                );
                return;
              }

              if (
                email !== registeredEmail ||
                password !== registeredPassword
              ) {
                alert(
                  "Invalid email or password."
                );
                return;
              }

              localStorage.setItem(
                "templeLoggedIn",
                "true"
              );

              localStorage.setItem(
                "templeUserEmail",
                email
              );

              goTo("/dashboard");
            }}
          >
            <LogIn size={18} />
            Sign In
          </button>

          <div className="auth-divider">
            <span>New to the system?</span>
          </div>

          <button
            type="button"
            className="auth-secondary-btn"
            onClick={() => goTo("/register")}
          >
            <UserPlus size={18} />
            Create Account
          </button>

          <button
            type="button"
            className="auth-back-btn"
            onClick={() => goTo("/")}
          >
            <ArrowLeft size={16} />
            Back to Home
          </button>

</div>
      </div>
    );
  }

  /* =====================================================
     REGISTER
  ===================================================== */

  if (path === "/register") {
    return (
      <div className="login-page">
        <div className="login-box">

          <div className="auth-icon">
            <UserPlus size={32} />
          </div>

          <div className="auth-badge">
            <Sparkles size={14} />
            Get Started
          </div>

          <h1>Create Account</h1>

          <p>
            Create your Temple Management
            System account.
          </p>

          <div className="auth-field">
            <label>Full Name</label>

            <input
              id="register-name"
              type="text"
              placeholder="Enter your full name"
            />
          </div>

          <div className="auth-field">
            <label>Email Address</label>

            <input
              id="register-email"
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="auth-field">
            <label>Password</label>

            <input
              id="register-password"
              type="password"
              placeholder="Create a password"
            />
          </div>

          <div className="auth-field">
            <label>Confirm Password</label>

            <input
              id="register-confirm"
              type="password"
              placeholder="Confirm your password"
            />
          </div>

          <button
            type="button"
            className="auth-primary-btn"
            onClick={() => {
              const name = (
                document.getElementById(
                  "register-name"
                ) as HTMLInputElement
              ).value.trim();

              const email = (
                document.getElementById(
                  "register-email"
                ) as HTMLInputElement
              ).value.trim();

              const password = (
                document.getElementById(
                  "register-password"
                ) as HTMLInputElement
              ).value;

              const confirmPassword = (
                document.getElementById(
                  "register-confirm"
                ) as HTMLInputElement
              ).value;

              if (
                !name ||
                !email ||
                !password ||
                !confirmPassword
              ) {
                alert(
                  "Please fill all fields."
                );
                return;
              }

              if (
                password !== confirmPassword
              ) {
                alert(
                  "Passwords do not match."
                );
                return;
              }

              localStorage.setItem(
                "templeName",
                name
              );

              localStorage.setItem(
                "templeEmail",
                email
              );

              localStorage.setItem(
                "templePassword",
                password
              );

              localStorage.removeItem(
                "templeLoggedIn"
              );

              alert(
                "Registration successful!"
              );

              goTo("/login");
            }}
          >
            <UserPlus size={18} />
            Create Account
          </button>

          <p className="auth-switch">
            Already have an account?
            <span
              onClick={() => goTo("/login")}
            >
              Sign In
            </span>
          </p>

          <button
            type="button"
            className="auth-back-btn"
            onClick={() => goTo("/")}
          >
            <ArrowLeft size={16} />
            Back to Home
          </button>

        </div>
      </div>
    );
  }
  if (path === "/profile") {
  return (
    <main className="dashboard-content">
      <div className="page-header">
        <div>
          <span className="section-eyebrow">ACCOUNT</span>
          <h1>My Profile</h1>
          <p>Manage your temple administrator profile.</p>
        </div>
      </div>

      <section className="dashboard-section">
        <div className="service-card">
          <div className="service-icon">
            <User size={24} />
          </div>

         <h2>{getUserName()}</h2>
<p>{getUserEmail() || "Administrator account"}</p>
        </div>
      </section>
    </main>
  );
}

  /* =====================================================
     DASHBOARD
  ===================================================== */

  if (path === "/dashboard") {
    if (!requireLogin()) {
      return null;
    }

   

    return (
      <div className="dashboard-page">

        <header className="dashboard-navbar">

          <div className="dashboard-logo">
            <span className="dashboard-logo-icon">
              <Landmark size={28} />
            </span>

            <div>
              <h2>
                Temple Management
              </h2>

              <p>
                Digital Temple Services
              </p>
            </div>
          </div>

         <div className="dashboard-user">

  <div className="dashboard-welcome">
    <span>Welcome back</span>
    <strong>{getUserName()}</strong>
  </div>

  {/* TEMPLE MEMBERS */}
  <button type="button" onClick={() => goTo("/members")} className="auth-primary-btn" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
    <Users size={17} /> Members
  </button>

  {/* PROFILE BUTTON */}
  <button
    type="button"
    onClick={() => setProfileOpen(true)}
    className="auth-primary-btn"
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
    }}
  >
    <User size={17} />
    Profile
  </button>

  {/* LOGOUT BUTTON */}
  <button
    type="button"
    onClick={logout}
  >
    <LogOut size={17} />
    Logout
  </button>

</div>

        </header>

        <main className="dashboard-content">

          <SharePublicTempleDialog
            open={sharePublicOpen}
            publicUrl={publicTempleUrl}
            copied={shareCopied}
            onClose={() => setSharePublicOpen(false)}
            onCopy={copyPublicTempleLink}
            onShare={sharePublicTemple}
            onOpen={() => goTo("/public-temple")}
          />

          <div className="dashboard-heading">

            <div>
              <p className="dashboard-small-title">
                TEMPLE MANAGEMENT SYSTEM
              </p>

              <h1>
                 Shri Shivamma temple
              </h1>

              <p>
                Manage temple services,
                bookings, events, donations
                and devotees from one place.
              </p>
            </div>

            <div
              style={{
                display: "flex",
                gap: 10,
                flexWrap: "wrap",
                justifyContent: "flex-end",
              }}
            >
              <button
                className="dashboard-quick-btn"
                type="button"
                onClick={() => setSharePublicOpen(true)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  background: "#fffaf1",
                  color: "#69451f",
                  border: "1px solid #dec9a6",
                }}
              >
                <Share2 size={17} />
                Share Public Temple
              </button>
            </div>

          </div>

          {/* STATISTICS */}

        <div className="dashboard-stats">

  <div className="stat-card">
    <div className="stat-icon">
      <HandHeart size={28} />
    </div>
    <div>
      <h3>
        {statsLoading ? "—" : dashboardStats.todayPoojas}
      </h3>
      <p>Today's Poojas</p>
    </div>
  </div>

  <div className="stat-card">
    <div className="stat-icon">
      <CalendarDays size={28} />
    </div>
    <div>
      <h3>
        {statsLoading ? "—" : dashboardStats.upcomingEvents}
      </h3>
      <p>Upcoming Events</p>
    </div>
  </div>

  <div className="stat-card">
    <div className="stat-icon">
      <Users size={28} />
    </div>
    <div>
      <h3>
        {statsLoading ? "—" : dashboardStats.devotees}
      </h3>
      <p>Registered Devotees</p>
    </div>
  </div>

  <div className="stat-card">
    <div className="stat-icon"><UserPlus size={28} /></div>
    <div><h3>{members.length}</h3><p>Temple Members</p></div>
  </div>

  <div className="stat-card">
    <div className="stat-icon">
      <Wallet size={28} />
    </div>
    <div>
      <h3>
        {statsLoading
          ? "—"
          : `₹${dashboardStats.donationTotal.toLocaleString("en-IN")}`}
      </h3>
      <p>Total Donations</p>
    </div>
  </div>

</div>

          {/* SERVICES */}

          <section className="dashboard-section">

            <div className="section-heading">
              <div>
                <span className="section-label">
                  MANAGEMENT
                </span>

                <h2>
                  Temple Services
                </h2>

                <p>
                  Everything you need to
                  manage daily temple operations.
                </p>
              </div>
            </div>

            <div className="dashboard-cards">

              <div className="dashboard-card">

                <div className="dashboard-card-icon">
                  <HandHeart size={26} />
                </div>

                <h3>
                  Pooja Booking
                </h3>

                <p>
                  Schedule poojas and
                  manage special religious
                  ceremonies.
                </p>

                <div className="dashboard-card-actions">

                  <button
                    type="button"
                    className="dashboard-outline-btn"
                    onClick={() =>
                      goTo(
                        "/pooja-bookings"
                      )
                    }
                  >
                    <CalendarCheck size={16} />
                    View Bookings
                  </button>

                </div>
              </div>

              <div className="dashboard-card">

                <div className="dashboard-card-icon">
                  <CalendarDays size={26} />
                </div>

                <h3>
                  Temple Events
                </h3>

                <p>
                  View festivals,
                  celebrations and upcoming
                  temple programs.
                </p>

              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
  <button
    type="button"
    onClick={() => goTo("/events")}
  >
    <CalendarDays size={16} />
    View Events
  </button>

  <button
    type="button"
    onClick={() => goTo("/create-event")}
  >
    <CalendarCheck size={16} />
    Add Event
  </button>
</div>
              </div>

              <div className="dashboard-card">

                <div className="dashboard-card-icon">
                  <Wallet size={26} />
                </div>

                <h3>
                  Donations
                </h3>

                <p>
                  Track temple contributions
                  and maintain donation records.
                </p>

                <button
                  type="button"
                  onClick={() =>
                    goTo("/donations")
                  }
                >
                  <Wallet size={16} />
                  Manage Donations
                </button>

              </div>

              <div className="dashboard-card">

                <div className="dashboard-card-icon">
                  <Users size={26} />
                </div>

                <h3>
                  Devotees
                </h3>

                <p>
                  Manage devotee information
                  and temple activities.
                </p>

                <button
                  type="button"
                  onClick={() =>
                    goTo("/devotees")
                  }
                >
                  <Users size={16} />
                  Manage Devotees
                </button>

              </div>

              <div className="dashboard-card">
                <div className="dashboard-card-icon"><UserPlus size={26} /></div>
                <span className="card-small-label">COMMUNITY</span>
                <h3>Temple Members &amp; Family Members</h3>
                <p>Add temple members with one main family member name, separate their work and track contributions.</p>
                <button type="button" onClick={() => goTo("/members")}>
                  <UserPlus size={16} /> Manage Members
                </button>
              </div>

            </div>

          </section>

          {/* RECENT BOOKINGS */}

          <section className="recent-bookings-section">

            <div className="recent-bookings-header">

              <div>
                <span className="section-label">
                  BOOKINGS
                </span>

                <h2>
                  Recent Pooja Bookings
                </h2>

                <p>
                  Your latest temple service
                  registrations.
                </p>
              </div>

              <button
                type="button"
                className="view-all-bookings-btn"
                onClick={() =>
                  goTo("/pooja-bookings")
                }
              >
                View All
                <ChevronRight size={15} />
              </button>

            </div>

            <div className="booking-summary">

              <div className="booking-summary-icon">
                <CalendarCheck size={20} />
              </div>

              <div className="booking-summary-content">
                <span>
                  Total Registered Bookings
                </span>

                <strong>
                  {bookings.length}
                </strong>
              </div>

            </div>

            {bookings.length === 0 ? (

              <div className="empty-bookings">

                <div className="empty-bookings-icon">
                  <CalendarDays size={25} />
                </div>

                <h3>
                  No Pooja Bookings Yet
                </h3>

                <p>
                  Your upcoming pooja
                  registrations will appear
                  here.
                </p>


              </div>

            ) : (

              <div className="booking-list">

                {bookings
                  .slice(0, 3)
                  .map(
                    (
                      booking: any,
                      index: number
                    ) => (

                      <div
                        className="booking-item"
                        key={
                          booking._id ||
                          booking.id ||
                          index
                        }
                      >

                        <div className="booking-item-icon">
                          <HandHeart size={19} />
                        </div>

                        <div className="booking-item-details">

                          <strong>
                            {booking.poojaName ||
                              booking.pooja ||
                              booking.service ||
                              "Pooja Booking"}
                          </strong>

                          <span>
                            {booking.devoteeName ||
                              "Devotee"}{" "}
                            •{" "}
                            {booking.date ||
                              "Date unavailable"}
                          </span>

                        </div>

                        <span className="booking-status">
                          <CheckCircle2
                            size={13}
                          />
                          Confirmed
                        </span>

                      </div>
                    )
                  )}

              </div>
            )}

          </section>

          {/* ACCOUNT */}

          <section className="account-section">

            <div>
              <span className="section-label">
                ACCOUNT
              </span>

              <h2>
                Account Information
              </h2>

              <p>
                Your registered temple
                management account.
              </p>
            </div>

            <div className="account-info">

              <div>
                <span>Name</span>
             <strong>{getUserName()}</strong>
              </div>

              <div>
                <span>Email</span>
              <strong>{getUserEmail()}</strong>
              </div>

            </div>

          </section>

        </main>
        {profileOpen && (
  <div
    onClick={() => setProfileOpen(false)}
    style={{
      position: "fixed",
      inset: 0,
      zIndex: 9999,
      background: "rgba(43, 33, 24, 0.45)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 20,
    }}
  >
    <div
      onClick={(e) => e.stopPropagation()}
      style={{
        width: "100%",
        maxWidth: 460,
        background: "#fffaf1",
        borderRadius: 24,
        padding: 30,
        boxShadow: "0 24px 80px rgba(0,0,0,.2)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 24,
        }}
      >
        <div>
          <span className="section-eyebrow">ADMINISTRATOR</span>
          <h2 style={{ margin: "8px 0 0" }}>Admin Profile</h2>
        </div>

        <button
          type="button"
          onClick={() => setProfileOpen(false)}
          style={{
            border: 0,
            background: "#f3eadc",
            borderRadius: "50%",
            width: 40,
            height: 40,
            cursor: "pointer",
            fontSize: 20,
          }}
        >
          ×
        </button>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          padding: 18,
          background: "#f8f0e3",
          borderRadius: 18,
          marginBottom: 20,
        }}
      >
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: "50%",
            background: "#d99a16",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 25,
            fontWeight: 700,
          }}
        >
          K
        </div>

        <div>
          <h3 style={{ margin: 0 }}>{getUserName()}</h3>
          <p style={{ margin: "5px 0 0", opacity: 0.65 }}>
            Temple Administrator
          </p>
        </div>
      </div>

      <div>
      <p><strong>Email</strong></p>
<p>{localStorage.getItem("templeEmail") || "No email available"}</p>
        <p><strong>Role</strong></p>
        <p>Temple Administrator</p>

        <p><strong>Access</strong></p>
        <p>Temple Management Dashboard</p>
      </div>

      <button
        type="button"
        onClick={() => setProfileOpen(false)}
        className="auth-primary-btn"
        style={{
          width: "100%",
          marginTop: 18,
        }}
      >
        Close
      </button>
    </div>
  </div>
)}

        <footer className="dashboard-footer">

          <p>
            <Landmark size={17} />
            Temple Management System
          </p>

          <span>
            © 2026 Temple Management System
          </span>

        </footer>

      </div>
      
    );
  }

  

  

  /* =====================================================
     TEMPLE MEMBERS
  ===================================================== */

  if (path === "/members") {
    if (!requireLogin()) return null;

    const workFilter = (window.localStorage.getItem("memberWorkFilter") || "All");
    const flattenedPeople = members.flatMap((member) => [
      { kind: "main", parent: member, person: member },
      ...(Array.isArray(member.familyMembers) ? member.familyMembers.map((family: any) => ({ kind: "family", parent: member, person: family })) : []),
    ]);

    const filteredMembers = members.filter((member) => {
      const query = memberSearch.trim().toLowerCase();
      const familyMembers = Array.isArray(member.familyMembers) ? member.familyMembers : [];
      const matchesSearch = !query || [
        member.familyMemberName || member.name,
        member.phone,
        member.email,
        member.id,
        member.type,
        member.status,
        member.work,
        ...familyMembers.flatMap((family: any) => [family.name, family.relation, family.phone, family.work, family.id]),
      ]
        .filter(Boolean)
        .some((value) => String(value).toLowerCase().includes(query));

      const matchesWork =
        workFilter === "All" ||
        workFilter === "Main Members" ||
        [member.work, ...familyMembers.map((family: any) => family.work)]
          .filter(Boolean)
          .some((value) => String(value).toLowerCase() === workFilter.toLowerCase());

      return matchesSearch && matchesWork;
    });

    // Main Members filter is deliberately separate: it never removes the main member records from the directory.
    const displayMembers = workFilter === "Main Members"
      ? filteredMembers
      : filteredMembers;

    const activeMembers = members.filter((member) => member.status === "Active").length;
    const mainFullyPaid = members.filter((member) => {
      const expected = Number(member.expectedAmount || 0);
      const paid = Number(member.paidAmount || 0);
      return expected > 0 && paid >= expected;
    }).length;
    const familyFullyPaid = flattenedPeople.filter((entry: any) => {
      if (entry.kind !== "family") return false;
      const expected = Number(entry.person.expectedAmount || 0);
      const paid = Number(entry.person.paidAmount || 0);
      return expected > 0 && paid >= expected;
    }).length;
    const fullyPaidMembers = mainFullyPaid + familyFullyPaid;

    const totalExpected = flattenedPeople.reduce(
      (sum, entry: any) => sum + Math.max(0, Number(entry.person.expectedAmount || 0)),
      0
    );
    const totalReceived = flattenedPeople.reduce(
      (sum, entry: any) => sum + Math.max(0, Number(entry.person.paidAmount || 0)),
      0
    );
    const totalPending = Math.max(0, totalExpected - totalReceived);

    const standardWorkOptions = [
      "Temple Worker",
      "Software Engineer",
      "Doctor",
      "Teacher",
      "Business",
      "Driver",
      "Fishing",
      "Cleaning",
      "Priest",
      "Security",
      "Office / Admin",
      "Volunteer",
    ];

    const familyWorkOptions = members.flatMap((member) =>
      (Array.isArray(member.familyMembers) ? member.familyMembers : [])
        .map((family: any) => String(family.work || "").trim())
        .filter(Boolean)
    );
    const workOptions = [
      "Main Members",
      ...Array.from(new Set([...standardWorkOptions, ...members
        .map((member) => String(member.work || "").trim())
        .filter(Boolean), ...familyWorkOptions]))
    ];

    const editingWork = String(editingMember?.work || "");
    const editingWorkIsStandard = standardWorkOptions.includes(editingWork);

    const setWorkFilter = (value: string) => {
      window.localStorage.setItem("memberWorkFilter", value);
      window.location.reload();
    };

    return (
      <div className="dashboard-page">
        <header className="dashboard-navbar">
          <div className="dashboard-logo">
            <span className="dashboard-logo-icon"><Landmark size={28} /></span>
            <div><h2>Temple Management</h2><p>Temple Members &amp; Family Members</p></div>
          </div>
          <div className="dashboard-user">
            <button type="button" onClick={() => goTo("/dashboard")}><Home size={17} /> Dashboard</button>
            <button type="button" onClick={logout}><LogOut size={17} /> Logout</button>
          </div>
        </header>

        <main className="dashboard-content">
          <div className="dashboard-heading">
            <div>
              <p className="dashboard-small-title">TEMPLE COMMUNITY</p>
              <h1>Temple Members &amp; Family Members</h1>
              <p>Each record starts with one main family member. Add working family members separately and track every person's contribution.</p>
            </div>
            <div style={{ display: "flex", gap: 9, flexWrap: "wrap", justifyContent: "flex-end" }}>
              <button type="button" className="auth-back-btn" onClick={() => openMemberForm()} style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                <UserPlus size={17} /> Add Member
              </button>
              <button type="button" className="auth-primary-btn" onClick={() => openMemberForm(null, true)} style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                <Users size={17} /> Add Member &amp; Family Members
              </button>
            </div>
          </div>

          <div className="dashboard-stats">
            <div className="stat-card">
              <div className="stat-icon"><Users size={25} /></div>
              <div><h3>{members.length}</h3><p>Total Members</p></div>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><ShieldCheck size={25} /></div>
              <div><h3>{activeMembers}</h3><p>Active Members</p></div>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><CheckCircle2 size={25} /></div>
              <div><h3>{fullyPaidMembers}</h3><p>Fully Paid Members</p></div>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><Wallet size={25} /></div>
              <div><h3>₹{totalReceived.toLocaleString("en-IN")}</h3><p>Total Received</p></div>
            </div>
          </div>

          <section className="dashboard-section">
            <div className="dashboard-cards" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(210px,1fr))" }}>
              <div className="dashboard-card">
                <div className="dashboard-card-icon"><Wallet size={26} /></div>
                <span className="card-small-label">TOTAL EXPECTED</span>
                <h3>₹{totalExpected.toLocaleString("en-IN")}</h3>
                <p>Total contribution expected from all temple members.</p>
              </div>
              <div className="dashboard-card">
                <div className="dashboard-card-icon"><CheckCircle2 size={26} /></div>
                <span className="card-small-label">TOTAL RECEIVED</span>
                <h3>₹{totalReceived.toLocaleString("en-IN")}</h3>
                <p>Total amount received from temple members.</p>
              </div>
              <div className="dashboard-card">
                <div className="dashboard-card-icon"><IndianRupee size={26} /></div>
                <span className="card-small-label">TOTAL PENDING</span>
                <h3>₹{totalPending.toLocaleString("en-IN")}</h3>
                <p>Amount still pending from members.</p>
              </div>
              <div className="dashboard-card">
                <div className="dashboard-card-icon"><Users size={26} /></div>
                <span className="card-small-label">FULLY PAID</span>
                <h3>{fullyPaidMembers}</h3>
                <p>Members whose full required amount is given.</p>
              </div>
            </div>
          </section>

          <section className="dashboard-section">
            <div className="recent-bookings-section">
              <div className="recent-bookings-header" style={{ alignItems: "flex-start", flexWrap: "wrap" }}>
                <div>
                  <span className="section-label">MEMBER DIRECTORY</span>
                  <h2>Temple Members &amp; Family Members</h2>
                  <p>Each record contains one main family member name, separated by work/role, with individual contribution tracking.</p>
                  <small style={{ display: "block", marginTop: 6, color: "#8a7660" }}>One main family member name per entry — add another entry for another family.</small>
                </div>
                <input
                  value={memberSearch}
                  onChange={(e) => setMemberSearch(e.target.value)}
                  placeholder="Search name, phone, email, ID or work"
                  style={{ minWidth: 280, border: "1px solid #dec9a6", borderRadius: 12, padding: "12px 14px", background: "#fffaf2", outline: "none" }}
                />
              </div>

              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", margin: "18px 0" }}>
                {["All", ...workOptions].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setWorkFilter(option)}
                    style={{
                      border: "1px solid #dec9a6",
                      borderRadius: 999,
                      padding: "8px 13px",
                      background: workFilter === option ? "#a66b22" : "#fffaf2",
                      color: workFilter === option ? "#fff" : "#6c461e",
                      cursor: "pointer",
                      fontWeight: 700,
                    }}
                  >
                    {option}
                  </button>
                ))}
              </div>

              {filteredMembers.length === 0 ? (
                <div className="empty-bookings">
                  <div className="empty-bookings-icon"><Users size={25} /></div>
                  <h3>{members.length === 0 ? "No Temple Members & Family Members Yet" : "No Members Found"}</h3>
                  <p>
                    {members.length === 0
                      ? "Add your first temple member to start building the community directory."
                      : "Try another search or work category."}
                  </p>
                  {members.length === 0 && (
                    <button type="button" className="auth-primary-btn" onClick={() => openMemberForm()}>
                      <UserPlus size={16} /> Add First Main Member
                    </button>
                  )}
                </div>
              ) : (
                <div className="booking-list">
                  {displayMembers.map((member) => {
                    const expected = Math.max(0, Number(member.expectedAmount || 0));
                    const paid = Math.max(0, Number(member.paidAmount || 0));
                    const pending = Math.max(0, expected - paid);
                    const paymentStatus =
                      expected > 0 && paid >= expected
                        ? "Paid"
                        : paid > 0
                        ? "Partial"
                        : "Not Given";

                    return (
                      <div className="booking-item" key={member.id} style={{ alignItems: "flex-start" }}>
                        <div className="booking-item-icon"><User size={19} /></div>

                        <div className="booking-item-details" style={{ minWidth: 0 }}>
                          <strong>{member.familyMemberName || member.name}</strong>
                          <span>
                            {member.id} • {member.phone}
                            {member.email ? ` • ${member.email}` : ""}
                          </span>
                          <span>
                            <b>Work:</b> {member.work || "Other"} • {member.type} • Joined {member.joinedDate}
                          </span>
                          <span>
                            <b>Family Members:</b> {Array.isArray(member.familyMembers) && member.familyMembers.length > 0
                              ? member.familyMembers.map((family: any) => family.name).join(", ")
                              : "None added yet"}
                          </span>

                          <div style={{
                            marginTop: 10,
                            padding: 12,
                            borderRadius: 12,
                            background: "#fffaf2",
                            border: "1px solid #eee1cd",
                            display: "flex",
                            gap: 18,
                            flexWrap: "wrap",
                          }}>
                            <span><b>Should Give:</b> ₹{expected.toLocaleString("en-IN")}</span>
                            <span><b>Given:</b> ₹{paid.toLocaleString("en-IN")}</span>
                            <span><b>Pending:</b> ₹{pending.toLocaleString("en-IN")}</span>
                            <span style={{
                              fontWeight: 800,
                              color: paymentStatus === "Paid"
                                ? "#26734d"
                                : paymentStatus === "Partial"
                                ? "#a66b22"
                                : "#8a3d2e",
                              display: "inline-flex",
                              alignItems: "center",
                              gap: 5,
                            }}>
                              {paymentStatus === "Paid" ? <CheckCircle2 size={15} /> : paymentStatus === "Partial" ? <IndianRupee size={15} /> : <X size={15} />}
                              {paymentStatus === "Paid" ? "All Money Given" : paymentStatus === "Partial" ? "Partial Given" : "Not Given"}
                            </span>
                          </div>

                          {workFilter !== "Main Members" && Array.isArray(member.familyMembers) && member.familyMembers.length > 0 && (
                            <div style={{ marginTop: 12, display: "grid", gap: 8 }}>
                              <b style={{ fontSize: 13, color: "#6c461e" }}>Family Members &amp; Their Contributions</b>
                              {member.familyMembers.map((family: any) => {
                                const familyExpected = Math.max(0, Number(family.expectedAmount || 0));
                                const familyPaid = Math.max(0, Number(family.paidAmount || 0));
                                const familyPending = Math.max(0, familyExpected - familyPaid);
                                const familyStatus = familyExpected > 0 && familyPaid >= familyExpected ? "Paid" : familyPaid > 0 ? "Partial" : "Not Given";
                                return (
                                  <div key={family.id} style={{ padding: 12, borderRadius: 12, background: "#fff", border: "1px solid #eadcc8", display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}>
                                    <div style={{ minWidth: 220, flex: 1 }}>
                                      <strong>{family.name}</strong>
                                      <div style={{ fontSize: 12, color: "#7a6857", marginTop: 3 }}>
                                        {family.relation || "Family Member"}{family.phone ? ` • ${family.phone}` : ""} • <b>Work:</b> {family.work || "Other"}
                                      </div>
                                      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 7, fontSize: 12 }}>
                                        <span><b>Should Give:</b> ₹{familyExpected.toLocaleString("en-IN")}</span>
                                        <span><b>Given:</b> ₹{familyPaid.toLocaleString("en-IN")}</span>
                                        <span><b>Pending:</b> ₹{familyPending.toLocaleString("en-IN")}</span>
                                        <span style={{ fontWeight: 800, color: familyStatus === "Paid" ? "#26734d" : familyStatus === "Partial" ? "#a66b22" : "#8a3d2e" }}>
                                          {familyStatus === "Paid" ? "☑ All Money Given" : familyStatus === "Partial" ? "🟡 Partial" : "❌ Not Given"}
                                        </span>
                                      </div>
                                    </div>
                                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                                      <button type="button" onClick={() => recordFamilyPayment(member, family)} style={{ border: 0, borderRadius: 8, padding: "7px 10px", background: "#a66b22", color: "#fff", cursor: "pointer", fontWeight: 800 }}><IndianRupee size={13} /> Money</button>
                                      <button type="button" onClick={() => markFamilyPaid(member, family)} style={{ border: "1px solid #b9d8c7", borderRadius: 8, padding: "7px 10px", background: "#f2fbf5", color: "#26734d", cursor: "pointer" }}>✓ Paid</button>
                                      <button type="button" onClick={() => markFamilyNotGiven(member, family)} style={{ border: "1px solid #e2c9c0", borderRadius: 8, padding: "7px 10px", background: "#fff8f5", color: "#8a3d2e", cursor: "pointer" }}>✕ Not Given</button>
                                      <button type="button" onClick={() => deleteFamilyMember(member.id, family.id)} style={{ border: "1px solid #e2c9c0", borderRadius: 8, padding: "7px 10px", background: "#fff8f5", color: "#8a3d2e", cursor: "pointer" }}>Delete</button>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>

                        <div style={{ display: "flex", alignItems: "center", gap: 7, flexWrap: "wrap", justifyContent: "flex-end", minWidth: 150 }}>
                          <span className="booking-status" style={{ opacity: member.status === "Active" ? 1 : .6 }}>
                            <CheckCircle2 size={13} /> {member.status}
                          </span>
                          <button
                            type="button"
                            onClick={() => openFamilyForm(member)}
                            style={{ border: "1px solid #dec9a6", borderRadius: 9, padding: "8px 11px", background: "#fffaf2", color: "#6c461e", cursor: "pointer", fontWeight: 800, display: "inline-flex", alignItems: "center", gap: 5 }}
                          >
                            <Users size={14} /> Add Family
                          </button>
                          <button
                            type="button"
                            onClick={() => recordMemberPayment(member)}
                            style={{ border: 0, borderRadius: 9, padding: "8px 11px", background: "#a66b22", color: "#fff", cursor: "pointer", fontWeight: 800, display: "inline-flex", alignItems: "center", gap: 5 }}
                          >
                            <IndianRupee size={14} /> Money
                          </button>
                          <button
                            type="button"
                            onClick={() => markMemberPaid(member)}
                            style={{ border: "1px solid #b9d8c7", borderRadius: 9, padding: "7px 10px", background: "#f2fbf5", color: "#26734d", cursor: "pointer" }}
                          >
                            ✓ Paid
                          </button>
                          <button
                            type="button"
                            onClick={() => markMemberNotGiven(member)}
                            style={{ border: "1px solid #e2c9c0", borderRadius: 9, padding: "7px 10px", background: "#fff8f5", color: "#8a3d2e", cursor: "pointer" }}
                          >
                            ✕ Not Given
                          </button>
                          <button type="button" onClick={() => openMemberForm(member)} style={{ border: "1px solid #dec9a6", borderRadius: 9, padding: "7px 10px", background: "#fffaf2", cursor: "pointer" }}>Edit</button>
                          <button type="button" onClick={() => deleteMember(member.id)} style={{ border: "1px solid #e2c9c0", borderRadius: 9, padding: "7px 10px", background: "#fff8f5", color: "#8a3d2e", cursor: "pointer" }}>Delete</button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </section>
        </main>

        {memberFormOpen && (
          <div onClick={closeMemberForm} style={{ position: "fixed", inset: 0, zIndex: 9999, background: "rgba(43,33,24,.5)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
            <div onClick={(e) => e.stopPropagation()} style={{ width: "100%", maxWidth: 600, maxHeight: "92vh", overflowY: "auto", background: "#fffaf1", borderRadius: 24, padding: 28, boxSizing: "border-box", boxShadow: "0 24px 80px rgba(0,0,0,.25)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                <div><span className="section-eyebrow">TEMPLE COMMUNITY</span><h2 style={{ margin: "7px 0 0" }}>{editingMember ? "Edit Main Member" : memberFormWithFamily ? "Add Member & Family Members" : "Add Main Temple Member"}</h2></div>
                <button type="button" onClick={closeMemberForm} style={{ border: 0, background: "#f3eadc", borderRadius: "50%", width: 40, height: 40, cursor: "pointer", fontSize: 20 }}>×</button>
              </div>

              <div className="auth-field"><label>Main Family Member Name</label><input id="member-name" defaultValue={editingMember?.familyMemberName || editingMember?.name || ""} placeholder="Enter one main family member name" /></div>
              <div className="auth-field"><label>Phone Number</label><input id="member-phone" type="tel" defaultValue={editingMember?.phone || ""} placeholder="Enter phone number" /></div>
              <div className="auth-field"><label>Email Address <span style={{ opacity: .55 }}>(optional)</span></label><input id="member-email" type="email" defaultValue={editingMember?.email || ""} placeholder="Enter email address" /></div>

              {memberFormWithFamily && !editingMember && (
                <div style={{ margin: "14px 0 18px", padding: 16, borderRadius: 16, background: "#fff", border: "1px solid #eadcc8" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, marginBottom: 6, flexWrap: "wrap" }}>
                    <div>
                      <label style={{ fontWeight: 900 }}>Family Members</label>
                      <small style={{ display: "block", marginTop: 4, color: "#8a7660" }}>Add each family member separately. Every person can have their own relation, job and contribution.</small>
                    </div>
                    <button
                      type="button"
                      onClick={() => setFamilyDrafts((items) => [...items, createFamilyDraft()])}
                      style={{ border: "1px solid #dec9a6", borderRadius: 10, padding: "9px 12px", background: "#fffaf2", color: "#6c461e", cursor: "pointer", fontWeight: 900 }}
                    >
                      + Add Family Member
                    </button>
                  </div>

                  {familyDrafts.length === 0 && (
                    <div style={{ padding: 14, borderRadius: 12, background: "#fffaf4", color: "#8a7660", fontSize: 13, border: "1px dashed #dec9a6" }}>
                      No family members added yet. Click <b>+ Add Family Member</b> to add one.
                    </div>
                  )}

                  <div style={{ display: "grid", gap: 14, marginTop: familyDrafts.length ? 14 : 0 }}>
                    {familyDrafts.map((draft: any, index: number) => (
                      <div key={draft.id} style={{ padding: 14, borderRadius: 14, background: "#fffaf1", border: "1px solid #eadcc8" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                          <b style={{ color: "#6c461e" }}>Family Member {index + 1}</b>
                          <button
                            type="button"
                            onClick={() => setFamilyDrafts((items) => items.filter((item) => item.id !== draft.id))}
                            style={{ border: "1px solid #e2c9c0", borderRadius: 8, padding: "6px 9px", background: "#fff8f5", color: "#8a3d2e", cursor: "pointer", fontWeight: 800 }}
                          >
                            Remove
                          </button>
                        </div>

                        <div className="auth-field"><label>Family Member Name</label><input value={draft.name} placeholder="Enter family member name" onChange={(e) => setFamilyDrafts((items) => items.map((item) => item.id === draft.id ? { ...item, name: e.target.value } : item))} /></div>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                          <div className="auth-field"><label>Relation</label><input value={draft.relation} placeholder="Wife, Son, Daughter, etc." onChange={(e) => setFamilyDrafts((items) => items.map((item) => item.id === draft.id ? { ...item, relation: e.target.value } : item))} /></div>
                          <div className="auth-field"><label>Phone</label><input type="tel" value={draft.phone} placeholder="Phone number" onChange={(e) => setFamilyDrafts((items) => items.map((item) => item.id === draft.id ? { ...item, phone: e.target.value } : item))} /></div>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                          <div className="auth-field">
                            <label>Work / Job</label>
                            <select value={draft.work} onChange={(e) => setFamilyDrafts((items) => items.map((item) => item.id === draft.id ? { ...item, work: e.target.value } : item))}>
                              {standardWorkOptions.map((option) => <option key={option} value={option}>{option}</option>)}
                              <option value="Other">Other / Custom</option>
                            </select>
                            {draft.work === "Other" && <input value={draft.customWork} placeholder="Enter custom work" style={{ marginTop: 8 }} onChange={(e) => setFamilyDrafts((items) => items.map((item) => item.id === draft.id ? { ...item, customWork: e.target.value } : item))} />}
                          </div>
                          <div className="auth-field"><label>Amount to Give (₹)</label><input type="number" min="0" value={draft.expectedAmount} onChange={(e) => setFamilyDrafts((items) => items.map((item) => item.id === draft.id ? { ...item, expectedAmount: e.target.value } : item))} /></div>
                        </div>
                        <div className="auth-field"><label>Amount Given (₹)</label><input type="number" min="0" value={draft.paidAmount} onChange={(e) => setFamilyDrafts((items) => items.map((item) => item.id === draft.id ? { ...item, paidAmount: e.target.value } : item))} /></div>
                        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", fontSize: 12, color: "#6c5a48" }}>
                          <span><b>Pending:</b> ₹{Math.max(0, Number(draft.expectedAmount || 0) - Number(draft.paidAmount || 0)).toLocaleString("en-IN")}</span>
                          <span style={{ fontWeight: 900, color: Number(draft.expectedAmount || 0) > 0 && Number(draft.paidAmount || 0) >= Number(draft.expectedAmount || 0) ? "#26734d" : Number(draft.paidAmount || 0) > 0 ? "#a66b22" : "#8a3d2e" }}>
                            {Number(draft.expectedAmount || 0) > 0 && Number(draft.paidAmount || 0) >= Number(draft.expectedAmount || 0) ? "☑ All Money Given" : Number(draft.paidAmount || 0) > 0 ? "🟡 Partial" : "❌ Not Given"}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                <div className="auth-field">
                  <label>Membership Type</label>
                  <select id="member-type" defaultValue={editingMember?.type || "Regular"}>
                    <option value="Regular">Regular</option>
                    <option value="Annual">Annual</option>
                    <option value="Lifetime">Lifetime</option>
                    <option value="Volunteer">Volunteer</option>
                  </select>
                </div>
                <div className="auth-field">
                  <label>Work / Job Category</label>
                  <select
                    id="member-work"
                    defaultValue={editingWorkIsStandard ? editingWork : "Other"}
                  >
                    {standardWorkOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                    <option value="Other">Other / Custom</option>
                  </select>
                  <input
                    id="member-work-custom"
                    defaultValue={editingWorkIsStandard ? "" : editingWork}
                    placeholder="If Other, enter custom work"
                    style={{ marginTop: 8 }}
                  />
                </div>
              </div>

              <div className="auth-field">
                <label>Amount to Give (₹)</label>
                <input
                  id="member-expected"
                  type="number"
                  min="0"
                  defaultValue={editingMember?.expectedAmount ?? 0}
                  placeholder="Enter required contribution"
                />
              </div>

              <div className="auth-field">
                <label>Amount Given (₹)</label>
                <input
                  id="member-paid"
                  type="number"
                  min="0"
                  defaultValue={editingMember?.paidAmount ?? 0}
                  placeholder="Enter amount already given"
                />
              </div>

              <div style={{
                padding: 13,
                borderRadius: 12,
                background: "#fff",
                border: "1px solid #eee1cd",
                color: "#6c5a48",
                lineHeight: 1.55,
                fontSize: 13,
                marginBottom: 10,
              }}>
                <b>Payment status:</b>{" "}
                {Number(editingMember?.expectedAmount || 0) > 0 &&
                Number(editingMember?.paidAmount || 0) >= Number(editingMember?.expectedAmount || 0)
                  ? "✓ All Money Given"
                  : Number(editingMember?.paidAmount || 0) > 0
                  ? "🟡 Partial"
                  : "✕ Not Given"}
              </div>

              <div className="auth-field"><label>Joining Date</label><input id="member-date" type="date" defaultValue={editingMember?.joinedDate || new Date().toISOString().split("T")[0]} /></div>
              <div className="auth-field"><label>Status</label><select id="member-status" defaultValue={editingMember?.status || "Active"}><option value="Active">Active</option><option value="Inactive">Inactive</option></select></div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 20 }}>
                <button type="button" className="auth-back-btn" onClick={closeMemberForm}>Cancel</button>
                <button type="button" className="auth-primary-btn" onClick={submitMember}><CheckCircle2 size={17} /> {editingMember ? "Save Changes" : "Add Member"}</button>
              </div>
            </div>
          </div>
        )}

        {familyFormOpen && familyParent && (
          <div onClick={closeFamilyForm} style={{ position: "fixed", inset: 0, zIndex: 10000, background: "rgba(43,33,24,.5)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
            <div onClick={(e) => e.stopPropagation()} style={{ width: "100%", maxWidth: 520, background: "#fffaf1", borderRadius: 24, padding: 28, boxSizing: "border-box", boxShadow: "0 24px 80px rgba(0,0,0,.25)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
                <div><span className="section-eyebrow">TEMPLE FAMILY</span><h2 style={{ margin: "7px 0 0" }}>Add Family Member</h2><p style={{ margin: "6px 0 0", color: "#806c58", fontSize: 13 }}>Main member: <b>{familyParent.familyMemberName || familyParent.name}</b></p></div>
                <button type="button" onClick={closeFamilyForm} style={{ border: 0, background: "#f3eadc", borderRadius: "50%", width: 40, height: 40, cursor: "pointer", fontSize: 20 }}>×</button>
              </div>
              <div className="auth-field"><label>Family Member Name</label><input id="family-name" placeholder="Enter family member name" autoFocus /></div>
              <div className="auth-field"><label>Relation <span style={{ opacity: .55 }}>(optional)</span></label><input id="family-relation" placeholder="Example: Wife, Son, Daughter" /></div>
              <div className="auth-field"><label>Phone Number <span style={{ opacity: .55 }}>(optional)</span></label><input id="family-phone" type="tel" placeholder="Enter phone number" /></div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                <div className="auth-field">
                  <label>Work / Job</label>
                  <select id="family-work" defaultValue="Other">
                    <option value="Software Engineer">Software Engineer</option>
                    <option value="Doctor">Doctor</option>
                    <option value="Teacher">Teacher</option>
                    <option value="Business">Business</option>
                    <option value="Driver">Driver</option>
                    <option value="Fishing">Fishing</option>
                    <option value="Cleaning">Cleaning</option>
                    <option value="Priest">Priest</option>
                    <option value="Security">Security</option>
                    <option value="Office / Admin">Office / Admin</option>
                    <option value="Volunteer">Volunteer</option>
                    <option value="Temple Worker">Temple Worker</option>
                    <option value="Other">Other / Custom</option>
                  </select>
                  <input id="family-work-custom" placeholder="If Other, enter custom work" style={{ marginTop: 8 }} />
                </div>
                <div className="auth-field">
                  <label>Amount to Give (₹)</label>
                  <input id="family-expected" type="number" min="0" defaultValue="0" placeholder="Amount this family member should give" />
                </div>
              </div>
              <div className="auth-field">
                <label>Amount Given (₹)</label>
                <input id="family-paid" type="number" min="0" defaultValue="0" placeholder="Amount already given" />
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end", gap: 10, marginTop: 18 }}>
                <button type="button" className="auth-back-btn" onClick={closeFamilyForm}>Cancel</button>
                <button type="button" className="auth-primary-btn" onClick={submitFamilyMember}><Users size={17} /> Add Family Member</button>
              </div>
            </div>
          </div>
        )}

        <footer className="dashboard-footer"><p><Landmark size={17} /> Temple Management System</p><span>© 2026 Temple Management System</span></footer>
      </div>
    );
  }

  /* =====================================================
     PUBLIC POOJA SERVICES
  ===================================================== */

  if (path === "/pooja-services") {
    return (
      <div className="dashboard-page">
        <header className="dashboard-navbar">
          <div className="dashboard-logo">
            <span className="dashboard-logo-icon">
              <Landmark size={28} />
            </span>
            <div>
              <h2>Temple Management</h2>
              <p>Temple Services</p>
            </div>
          </div>

          <div className="dashboard-user">
            <button type="button" onClick={() => goTo("/")}>
              <Home size={17} />
              Home
            </button>
            <button type="button" onClick={() => goTo(isLoggedIn ? "/dashboard" : "/login")}>
              {isLoggedIn ? <Landmark size={17} /> : <LogIn size={17} />}
              {isLoggedIn ? "Dashboard" : "Admin Login"}
            </button>
          </div>
        </header>

        <main className="dashboard-content">
          <div className="page-header">
            <div>
              <span className="section-eyebrow">TEMPLE SERVICES</span>
              <h1>Available Poojas</h1>
              <p>
                Explore the poojas and religious ceremonies offered by the temple.
                Booking is available through the temple management system.
              </p>
            </div>
          </div>

          <section className="dashboard-section">
            <div className="events-grid">
              {[
                {
                  title: "Ganesh Pooja",
                  description: "A devotional pooja seeking the blessings of Lord Ganesha for auspicious beginnings and removal of obstacles.",
                },
                {
                  title: "Lakshmi Pooja",
                  description: "A traditional worship dedicated to Goddess Lakshmi for prosperity, wellbeing and abundance.",
                },
                {
                  title: "Satyanarayan Pooja",
                  description: "A sacred ceremony performed for peace, gratitude, family wellbeing and divine blessings.",
                },
                {
                  title: "Abhishekam",
                  description: "A ceremonial bathing and worship ritual offered with devotion as part of temple religious practice.",
                },
              ].map((service) => (
                <article className="event-card" key={service.title}>
                  <div className="event-card-header">
                    <div className="event-icon">
                      <HandHeart size={22} />
                    </div>
                    <span className="event-status">Available</span>
                  </div>

                  <div className="event-card-body">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>

                    <div className="event-details">
                      <div>
                        <Landmark size={17} />
                        <span>Temple service</span>
                      </div>
                      <div>
                        <CalendarCheck size={17} />
                        <span>Booking subject to availability</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="auth-primary-btn"
                      style={{ width: "100%", marginTop: "18px" }}
                      onClick={() => goTo("/login")}
                    >
                      <CalendarCheck size={16} />
                      Book This Pooja
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </main>

        <footer className="dashboard-footer">
          <p>
            <Landmark size={17} />
            Temple Management System
          </p>
          <span>© 2026 Temple Management System</span>
        </footer>
      </div>
    );
  }


  /* =====================================================
     BOOK POOJA PAGE
  ===================================================== */

  if (path === "/book-pooja") {

    return (
      <div className="login-page">

        <div className="login-box booking-form-box">

          <div className="auth-icon">
            <HandHeart size={32} />
          </div>

          <div className="auth-badge">
            <CalendarCheck size={14} />
            Temple Service
          </div>

          <h1>
            Book a Pooja
          </h1>

          <p>
            Register for a special pooja
            or religious ceremony.
          </p>

          <div className="auth-field">
            <label>Devotee Name</label>

            <input
              id="pooja-name"
              type="text"
              placeholder="Enter devotee name"
            />
          </div>

          <div className="auth-field">
            <label>Phone Number</label>

            <input
              id="pooja-phone"
              type="tel"
              placeholder="Enter phone number"
            />
          </div>

          <div className="auth-field">
            <label>Select Pooja</label>

            <select id="pooja-type">

              <option value="">
                Choose a pooja
              </option>

              <option value="Ganesh Pooja">
                Ganesh Pooja
              </option>

              <option value="Lakshmi Pooja">
                Lakshmi Pooja
              </option>

              <option value="Satyanarayan Pooja">
                Satyanarayan Pooja
              </option>

              <option value="Abhishekam">
                Abhishekam
              </option>

            </select>
          </div>

          <div className="auth-field">
            <label>Preferred Date</label>

            <input
              id="pooja-date"
              type="date"
            />
          </div>

          <button
            type="button"
            className="auth-primary-btn"
            onClick={async () => {

              const name = (
                document.getElementById(
                  "pooja-name"
                ) as HTMLInputElement
              ).value.trim();

              const phone = (
                document.getElementById(
                  "pooja-phone"
                ) as HTMLInputElement
              ).value.trim();

              const pooja = (
                document.getElementById(
                  "pooja-type"
                ) as HTMLSelectElement
              ).value;

              const date = (
                document.getElementById(
                  "pooja-date"
                ) as HTMLInputElement
              ).value;

              if (
                !name ||
                !phone ||
                !pooja ||
                !date
              ) {
                alert(
                  "Please fill all booking details."
                );
                return;
              }

              try {

                const response =
                  await fetch(
                    `${API_URL}/api/pooja-bookings`,
                    {
                      method: "POST",
                      headers: {
                        "Content-Type":
                          "application/json",
                      },
                      body: JSON.stringify({
                        devoteeName:
                          name,
                        phone,
                        pooja,
                        date,
                      }),
                    }
                  );

                if (!response.ok) {
                  throw new Error(
                    "Failed to create booking"
                  );
                }

                const newBooking = {
                  id: Date.now(),
                  devoteeName: name,
                  phone,
                  pooja,
                  date,
                  status: "Pending",
                };

                const localBookings =
                  JSON.parse(
                    localStorage.getItem(
                      "poojaBookings"
                    ) || "[]"
                  );

                localStorage.setItem(
                  "poojaBookings",
                  JSON.stringify([
                    ...localBookings,
                    newBooking,
                  ])
                );

                alert(
                   "Pooja booking request submitted successfully!"
                 );

                 goTo(
                   "/public-temple"
                 );

              } catch (error) {

                console.error(error);

                alert(
                  "Unable to complete booking. Please make sure the backend server is running."
                );
              }
            }}
          >
            <CalendarCheck size={18} />
            Confirm Booking
          </button>

          <button
            type="button"
            className="auth-back-btn"
            onClick={() =>
              goTo("/public-temple")
             }
           >
             <ArrowLeft size={16} />
             Back to Public Temple
          </button>

        </div>
      </div>
    );
  }

  /* =====================================================
     POOJA BOOKINGS
  ===================================================== */

  if (path === "/pooja-bookings") {
    if (!requireLogin()) {
      return null;
    }

    return (
      <div className="dashboard-page">

        <header className="dashboard-navbar">

          <div className="dashboard-logo">
            <span className="dashboard-logo-icon">
              <Landmark size={28} />
            </span>

            <div>
              <h2>
                Temple Management
              </h2>

              <p>
                Pooja Bookings
              </p>
            </div>
          </div>

          <div className="dashboard-user">

            <button
              type="button"
              onClick={() =>
                goTo("/dashboard")
              }
            >
              <Home size={17} />
              Dashboard
            </button>

          </div>

        </header>

        <main className="dashboard-content">

          <div className="dashboard-heading">

            <div>
              <p className="dashboard-small-title">
                TEMPLE SERVICES
              </p>

              <h1>
                Pooja Bookings
              </h1>

              <p>
                View and manage all registered
                temple service bookings.
              </p>
            </div>

          </div>

          <section className="recent-bookings-section">

            <div className="recent-bookings-header">

              <div>
                <span className="section-label">
                  BOOKING RECORDS
                </span>

                <h2>
                  All Pooja Bookings
                </h2>

                <p>
                  Complete list of registered
                  pooja services.
                </p>
              </div>

              <div className="booking-count-badge">
                {bookings.length} Bookings
              </div>

            </div>

            {bookings.length === 0 ? (

              <div className="empty-bookings">

                <div className="empty-bookings-icon">
                  <CalendarDays size={25} />
                </div>

                <h3>
                  No Bookings Yet
                </h3>

                <p>
                  There are currently no
                  registered pooja bookings.
                </p>

              </div>

            ) : (

              <div className="professional-booking-list">

                {bookings.map(
                  (
                    booking: any,
                    index: number
                  ) => (

                    <div
                      className="professional-booking"
                      key={
                        booking._id ||
                        booking.id ||
                        index
                      }
                    >

                      <div className="professional-booking-icon">
                        <HandHeart size={23} />
                      </div>

                      <div className="professional-booking-main">

                        <div className="professional-booking-title">

                          <div>
                            <span className="booking-type">
                              POOJA SERVICE
                            </span>

                            <h3>
                              {booking.pooja ||
                                booking.poojaName ||
                                "Pooja Booking"}
                            </h3>
                          </div>

                          <span className="booking-status">
                            <CheckCircle2
                              size={13}
                            />
                             {booking.status || "Pending"}
                          </span>

                        </div>

                        <div className="booking-details">

                          <div>
                            <span>
                              Devotee
                            </span>

                            <strong>
                              {booking.devoteeName ||
                                "Not available"}
                            </strong>
                          </div>

                          <div>
                            <span>
                              Phone
                            </span>

                            <strong>
                              {booking.phone ||
                                "Not available"}
                            </strong>
                          </div>

                          <div>
                            <span>
                              Date
                            </span>

                            <strong>
                              {booking.date
                                ? new Date(
                                    booking.date
                                  ).toLocaleDateString(
                                    "en-IN",
                                    {
                                      day: "2-digit",
                                      month:
                                        "short",
                                      year:
                                        "numeric",
                                    }
                                  )
                                : "Not available"}
                            </strong>
                          </div>

                        </div>

                      </div>

                    </div>
                  )
                )}

              </div>
            )}

          </section>

        </main>

        <footer className="dashboard-footer">

          <p>
            <Landmark size={17} />
            Temple Management System
          </p>

          <span>
            © 2026 Temple Management System
          </span>

        </footer>

      </div>
    );
  }

  /* =====================================================
     DONATIONS
  ===================================================== */

  if (path === "/donations") {
    if (!requireLogin()) {
      return null;
    }

   
    const total = getDonationTotal();

    return (
      <div className="dashboard-page">

        <header className="dashboard-navbar">

          <div className="dashboard-logo">
            <span className="dashboard-logo-icon">
              <Landmark size={28} />
            </span>

            <div>
              <h2>
                Temple Management
              </h2>

              <p>
                Donations
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() =>
              goTo("/dashboard")
            }
          >
            <Home size={17} />
            Dashboard
          </button>

        </header>

        <main className="dashboard-content">

          <div className="dashboard-heading">

            <p className="dashboard-small-title">
              TEMPLE CONTRIBUTIONS
            </p>

            <h1>
              Donations
            </h1>

            <p>
              Manage temple donations
              and contribution records.
            </p>

          </div>

          <section className="donation-total-card">

            <div className="donation-total-icon">
              <IndianRupee size={25} />
            </div>

            <div>
              <span>
                TOTAL CONTRIBUTIONS
              </span>

              <h2>
                ₹
                {total.toLocaleString(
                  "en-IN"
                )}
              </h2>

              <p>
                Total amount received
                by the temple.
              </p>
            </div>

          </section>

          <section className="account-section donation-form-section">

            <div>
              <span className="section-label">
                NEW CONTRIBUTION
              </span>

              <h2>
                Add Donation
              </h2>

              <p>
                Record donor information
                and contribution details.
              </p>
            </div>

            <div className="donation-form">

              <div className="auth-field">
                <label>
                  Donor Name
                </label>

                <input
                  id="donor-name"
                  type="text"
                  placeholder="Enter donor name"
                />
              </div>

              <div className="auth-field">
                <label>
                  Phone Number
                </label>

                <input
                  id="donor-phone"
                  type="tel"
                  placeholder="Enter phone number"
                />
              </div>

              <div className="auth-field">
                <label>
                  Donation Amount
                </label>

                <input
                  id="donation-amount"
                  type="number"
                  min="1"
                  placeholder="Enter amount"
                />
              </div>

              <div className="auth-field">
                <label>
                  Purpose
                </label>

                <input
                  id="donation-purpose"
                  type="text"
                  placeholder="e.g. Temple Fund"
                />
              </div>

              <button
                type="button"
                className="auth-primary-btn"
                onClick={async() => {

                  const donorName = (
                    document.getElementById(
                      "donor-name"
                    ) as HTMLInputElement
                  ).value.trim();

                  const phone = (
                    document.getElementById(
                      "donor-phone"
                    ) as HTMLInputElement
                  ).value.trim();

                  const amount = Number(
                    (
                      document.getElementById(
                        "donation-amount"
                      ) as HTMLInputElement
                    ).value
                  );

                  const purpose = (
                    document.getElementById(
                      "donation-purpose"
                    ) as HTMLInputElement
                  ).value.trim();

                  if (
                    !donorName ||
                    !phone ||
                    !amount ||
                    amount <= 0 ||
                    !purpose
                  ) {
                    alert(
                      "Please fill all donation details correctly."
                    );

                    return;
                  }

                try {
  const response = await fetch(
    `${API_URL}/api/donations`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        donorName,
        phone,
        amount,
        purpose,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to add donation");
  }

  alert("Donation added successfully!");
  await loadDonations();

  goTo("/donations");
} catch (error) {
  console.error("Donation error:", error);

  alert(
    "Unable to add donation. Please make sure the backend and database are running."
  );
}
                }}
              >
                <IndianRupee size={17} />
                Add Donation
              </button>

            </div>

          </section>

          <section className="dashboard-section">

            <div className="section-heading">

              <div>
                <span className="section-label">
                  RECORDS
                </span>

                <h2>
                  Donation History
                </h2>

                <p>
                  View all recorded temple
                  contributions.
                </p>
              </div>

            </div>

            {donations.length === 0 ? (

              <div className="empty-bookings">

                <div className="empty-bookings-icon">
                  <Wallet size={25} />
                </div>

                <h3>
                  No Donations Yet
                </h3>

                <p>
                  Donation records will
                  appear here once added.
                </p>

              </div>

            ) : (

              <div className="dashboard-cards">

                {donations.map(
                  (
                    donation: any
                  ) => (

                    <div
                      className="dashboard-card"
                      key={donation.id}
                    >

                      <div className="dashboard-card-icon">
                        <Wallet size={25} />
                      </div>

                      <span className="card-small-label">
                        CONTRIBUTION
                      </span>

                      <h3>
                        ₹
                        {Number(
                          donation.amount
                        ).toLocaleString(
                          "en-IN"
                        )}
                      </h3>

                      <p>
                        <strong>
                          Donor:
                        </strong>{" "}
                        {donation.donorName}
                      </p>

                      <p>
                        <strong>
                          Purpose:
                        </strong>{" "}
                        {donation.purpose}
                      </p>

                      <p>
                        <strong>
                          Date:
                        </strong>{" "}
                        {donation.date}
                      </p>

                    </div>
                  )
                )}

              </div>
            )}

          </section>

        </main>

        <footer className="dashboard-footer">

          <p>
            <Landmark size={17} />
            Temple Management System
          </p>

          <span>
            © 2026 Temple Management System
          </span>

        </footer>

      </div>
    );
  }


  /* ============================================================
   CREATE EVENT
============================================================ */

if (path === "/create-event") {
  if (!requireLogin()) {
    return null;
  }

  return (
    <div className="dashboard-page">

      <header className="dashboard-navbar">

        <div className="dashboard-logo">

          <span className="dashboard-logo-icon">
            <Landmark size={28} />
          </span>

          <div>
            <h2>Temple Management</h2>
            <p>Create Temple Event</p>
          </div>

        </div>

        <div className="dashboard-user">

          <button
            type="button"
            onClick={() => goTo("/events")}
          >
            <CalendarDays size={17} />
            Events
          </button>

          <button
            type="button"
            onClick={() => goTo("/dashboard")}
          >
            <Home size={17} />
            Dashboard
          </button>

        </div>

      </header>

      <main className="dashboard-content">

        <div className="dashboard-heading">

          <div>
            <p className="dashboard-small-title">
              TEMPLE EVENTS
            </p>

            <h1>
              Create Event
            </h1>

            <p>
              Add a new festival, celebration or
              special temple program.
            </p>
          </div>

        </div>

        <section className="account-section">

          <div>
            <span className="section-label">
              EVENT INFORMATION
            </span>

            <h2>
              Add New Event
            </h2>

            <p>
              Enter the details of the upcoming
              temple event.
            </p>
          </div>

          <div className="donation-form">

            <div className="auth-field">
              <label>
                Event Title
              </label>

              <input
                id="event-title"
                type="text"
                placeholder="e.g. Ganesh Chaturthi"
              />
            </div>

            <div className="auth-field">
              <label>
                Description
              </label>

              <input
                id="event-description"
                type="text"
                placeholder="Enter event description"
              />
            </div>

            <div className="auth-field">
              <label>
                Event Date
              </label>

              <input
                id="event-date"
                type="date"
              />
            </div>

            <div className="auth-field">
              <label>
                Location
              </label>

              <input
                id="event-location"
                type="text"
                placeholder="e.g. Main Temple Hall"
              />
            </div>

            <div className="auth-field">
              <label>
                Status
              </label>

              <select id="event-status">

                <option value="Upcoming">
                  Upcoming
                </option>

                <option value="Completed">
                  Completed
                </option>

                <option value="Cancelled">
                  Cancelled
                </option>

              </select>
            </div>

            <button
              type="button"
              className="auth-primary-btn"
              onClick={async () => {

                const title = (
                  document.getElementById(
                    "event-title"
                  ) as HTMLInputElement
                ).value.trim();

                const description = (
                  document.getElementById(
                    "event-description"
                  ) as HTMLInputElement
                ).value.trim();

                const date = (
                  document.getElementById(
                    "event-date"
                  ) as HTMLInputElement
                ).value;

                const location = (
                  document.getElementById(
                    "event-location"
                  ) as HTMLInputElement
                ).value.trim();

                const status = (
                  document.getElementById(
                    "event-status"
                  ) as HTMLSelectElement
                ).value;

                if (
                  !title ||
                  !description ||
                  !date ||
                  !location ||
                  !status
                ) {
                  alert(
                    "Please fill all event details."
                  );
                  return;
                }

                try {

                  const response = await fetch(
                    `${API_URL}/api/events`,
                    {
                      method: "POST",
                      headers: {
                        "Content-Type":
                          "application/json",
                      },
                      body: JSON.stringify({
                        title,
                        description,
                        date,
                        location,
                        status,
                      }),
                    }
                  );

                  const data =
                    await response.json();

                  if (!response.ok) {
                    throw new Error(
                      data.message ||
                      "Failed to create event"
                    );
                  }

                  alert(
                    "Event created successfully!"
                  );

                  goTo("/events");

                } catch (error) {

                  console.error(
                    "Event creation error:",
                    error
                  );

                  alert(
                    "Unable to create event. Please make sure the backend server is running."
                  );

                }

              }}
            >
              <CalendarCheck size={18} />
              Create Event
            </button>

            <button
              type="button"
              className="auth-back-btn"
              onClick={() => goTo("/events")}
            >
              <ArrowLeft size={16} />
              Back to Events
            </button>

          </div>

        </section>

      </main>

      <footer className="dashboard-footer">

        <p>
          <Landmark size={17} />
          Temple Management System
        </p>

        <span>
          © 2026 Temple Management System
        </span>

      </footer>

    </div>
  );
}



/* ============================================================
   EVENTS
============================================================ */

if (path === "/events") {
 return (
  <div className="dashboard-page">
    <header className="dashboard-navbar">

      <div className="dashboard-logo">
        <span className="dashboard-logo-icon">
          <Landmark size={28} />
        </span>

        <div>
          <h2>Temple Management</h2>
          <p>Public Temple Events</p>
        </div>
      </div>

      <div className="dashboard-user">
 

  <button
    type="button"
    onClick={() => goTo("/")}
  >
    <Home size={17} />
    Home
  </button>

  <button
    type="button"
    onClick={() => goTo(isLoggedIn ? "/dashboard" : "/login")}
  >
    {isLoggedIn ? <Home size={17} /> : <LogIn size={17} />}
    {isLoggedIn ? "Dashboard" : "Admin Login"}
  </button>

</div>
      </header>
      <main className="dashboard-content">
        <div className="page-header">
          <div>
            <span className="section-eyebrow">PUBLIC TEMPLE INFORMATION</span>
            <h1>Temple Events</h1>
            <p>Discover upcoming festivals, celebrations and special temple programs. Event information is updated from the temple management system.</p>
          </div>
        </div>
        <section className="dashboard-section">
          <div className="section-title"><div><h2>Upcoming Events</h2><p>Stay updated with the latest temple events.</p></div></div>
          {eventsLoading ? (
            <div className="empty-state"><div className="loading-spinner"></div><h3>Loading events...</h3><p>Please wait while we load the latest temple events.</p></div>
          ) : events.length === 0 ? (
            <div className="empty-state"><CalendarDays size={42} /><h3>No Events Available</h3><p>There are currently no upcoming temple events.</p></div>
          ) : (
            <div className="events-grid">
              {events.map((event: any) => (
                <article className="event-card" key={event._id || event.id}>
                  <div className="event-card-header">
                    <div className="event-icon"><CalendarDays size={22} /></div>
                    <span className="event-status">{event.status || "Upcoming"}</span>
                  </div>
                  <div className="event-card-body">
                    <h3>{event.title || "Temple Event"}</h3>
                    <p>{event.description || "Temple event details will be available soon."}</p>
                    <div className="event-details">
                      <div><CalendarDays size={17} /><span>{event.date ? new Date(event.date).toLocaleDateString("en-IN", {day:"2-digit", month:"long", year:"numeric"}) : "Date to be announced"}</span></div>
                      <div><MapPin size={17} /><span>{event.location || "Temple premises"}</span></div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>
      <footer className="dashboard-footer"><Landmark size={18} /><span>© 2026 Temple Management System</span></footer>
    </div>
  );
}

  /* =====================================================
     PUBLIC TEMPLE TRANSPARENCY
  ===================================================== */

  if (path === "/public-temple") {
    const publicTotal = donations.reduce(
      (total: number, donation: any) =>
        total + Number(donation.amount || 0),
      0
    );

    return (
      <div
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(180deg,#fffaf0 0%,#ffffff 42%,#fffaf4 100%)",
          color: "#2b2118",
        }}
      >
        <header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 20,
            background: "rgba(255,250,240,.94)",
            backdropFilter: "blur(14px)",
            borderBottom: "1px solid rgba(120,82,35,.12)",
          }}
        >
          <div
            style={{
              maxWidth: 1180,
              margin: "0 auto",
              padding: "16px 24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 18,
            }}
          >
            <button
              type="button"
              onClick={() => goTo("/")}
              style={{
                border: 0,
                background: "transparent",
                display: "flex",
                alignItems: "center",
                gap: 12,
                cursor: "pointer",
                color: "#4b2f16",
              }}
            >
              <span
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 14,
                  display: "grid",
                  placeItems: "center",
                  background: "linear-gradient(135deg,#9b641f,#d6a34c)",
                  color: "#fff",
                  boxShadow: "0 8px 22px rgba(120,75,20,.18)",
                }}
              >
                <Landmark size={23} />
              </span>
              <span style={{ textAlign: "left" }}>
                <strong style={{ display: "block", fontSize: 17 }}>
                  Temple Management
                </strong>
                <small style={{ color: "#876f59" }}>
                  Public Information Portal
                </small>
              </span>
            </button>

            <div style={{ display: "flex", gap: 10 }}>
              <button
                type="button"
                onClick={() => goTo("/events")}
                style={{
                  border: "1px solid #dcc9aa",
                  background: "#fff",
                  color: "#5b3b1d",
                  borderRadius: 10,
                  padding: "10px 14px",
                  cursor: "pointer",
                  fontWeight: 700,
                }}
              >
                Events
              </button>
              <button
                 type="button"
                 onClick={() => goTo("/book-pooja")}
                 style={{
                   border: "1px solid #dcc9aa",
                   background: "#fff",
                   color: "#5b3b1d",
                   borderRadius: 10,
                   padding: "10px 14px",
                   cursor: "pointer",
                   fontWeight: 700,
                 }}
               >
                 Book a Pooja
               </button>
               <button
                type="button"
                onClick={() => goTo("/login")}
                style={{
                  border: 0,
                  background: "#4f3219",
                  color: "#fff",
                  borderRadius: 10,
                  padding: "10px 15px",
                  cursor: "pointer",
                  fontWeight: 700,
                }}
              >
                Admin Login
              </button>
            </div>
          </div>
        </header>

        <main>
          <section
            style={{
              maxWidth: 1180,
              margin: "0 auto",
              padding: "72px 24px 42px",
            }}
          >
            <div
              style={{
                maxWidth: 760,
                marginBottom: 34,
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "7px 12px",
                  borderRadius: 999,
                  background: "#f8ead2",
                  color: "#85531d",
                  fontSize: 12,
                  fontWeight: 800,
                  letterSpacing: ".12em",
                }}
              >
                <ShieldCheck size={15} />
                PUBLIC TRANSPARENCY
              </div>

              <h1
                style={{
                  fontSize: "clamp(38px,6vw,66px)",
                  lineHeight: 1.02,
                  margin: "18px 0 14px",
                  letterSpacing: "-.04em",
                  color: "#2d2117",
                }}
              >
                Temple information,
                <br />
                <span style={{ color: "#a66b22" }}>open to everyone.</span>
              </h1>

              <p
                style={{
                  margin: 0,
                  maxWidth: 680,
                  fontSize: 17,
                  lineHeight: 1.75,
                  color: "#756452",
                }}
              >
                View published temple donations, upcoming events and pooja
                 services in one place. Devotees can also submit a pooja booking
                 request here; administrative changes remain protected.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(210px,1fr))",
                gap: 16,
              }}
            >
              {[
                ["Total Donations", `₹${publicTotal.toLocaleString("en-IN")}`, Wallet],
                ["Donation Records", String(donations.length), HeartHandshake],
                ["Upcoming Events", String(events.length), CalendarDays],
              ].map(([label, value, Icon]: any) => (
                <div
                  key={label}
                  style={{
                    padding: 22,
                    borderRadius: 20,
                    background: "#fff",
                    border: "1px solid #eee1cd",
                    boxShadow: "0 12px 35px rgba(91,59,29,.07)",
                  }}
                >
                  <Icon size={22} color="#a66b22" />
                  <div style={{ marginTop: 13 }}>
                    <strong
                      style={{
                        display: "block",
                        fontSize: 29,
                        color: "#332318",
                      }}
                    >
                      {value}
                    </strong>
                    <span style={{ color: "#8a7763", fontSize: 14 }}>
                      {label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section
            style={{
              maxWidth: 1180,
              margin: "0 auto",
              padding: "16px 24px 72px",
              display: "grid",
              gridTemplateColumns: "minmax(0,1.35fr) minmax(300px,.65fr)",
              gap: 24,
            }}
          >
            <div
              style={{
                background: "#fff",
                border: "1px solid #eee1cd",
                borderRadius: 24,
                padding: 26,
                boxShadow: "0 14px 40px rgba(91,59,29,.06)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                <div>
                  <span style={{ color: "#a66b22", fontSize: 12, fontWeight: 800 }}>
                    DONATIONS
                  </span>
                  <h2 style={{ margin: "7px 0 5px", fontSize: 27 }}>
                    Public donation records
                  </h2>
                  <p style={{ margin: 0, color: "#887462" }}>
                    Published contribution history.
                  </p>
                </div>
                <Wallet size={28} color="#a66b22" />
              </div>

              <div style={{ marginTop: 22, display: "grid", gap: 10 }}>
                {donations.length === 0 ? (
                  <div style={{ padding: 35, textAlign: "center", color: "#8a7763" }}>
                    No donation records are currently published.
                  </div>
                ) : (
                  donations.map((donation: any, index: number) => (
                    <div
                      key={donation._id || donation.id || index}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "42px 1fr auto",
                        gap: 13,
                        alignItems: "center",
                        padding: 15,
                        borderRadius: 15,
                        background: "#fffaf2",
                        border: "1px solid #f0e5d4",
                      }}
                    >
                      <div
                        style={{
                          width: 42,
                          height: 42,
                          borderRadius: 12,
                          display: "grid",
                          placeItems: "center",
                          background: "#f6e7ca",
                          color: "#966020",
                        }}
                      >
                        <HeartHandshake size={19} />
                      </div>

                      <div style={{ minWidth: 0 }}>
                        <strong style={{ display: "block", color: "#3c2b1d" }}>
                          {donation.donorName ||
                            donation.name ||
                            donation.donor ||
                            "Temple Donor"}
                        </strong>
                        <span style={{ display: "block", marginTop: 3, color: "#8a7763", fontSize: 13 }}>
                          {donation.purpose ||
                            donation.reason ||
                            "Temple Donation"}
                          {" • "}
                          {donation.date
                            ? new Date(donation.date).toLocaleDateString("en-IN")
                            : donation.createdAt
                            ? new Date(donation.createdAt).toLocaleDateString("en-IN")
                            : "Date unavailable"}
                        </span>
                      </div>

                      <strong style={{ color: "#8d5b20", whiteSpace: "nowrap" }}>
                        ₹{Number(donation.amount || 0).toLocaleString("en-IN")}
                      </strong>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div style={{ display: "grid", gap: 24 }}>
              <div
                style={{
                  borderRadius: 24,
                  padding: 26,
                  color: "#fff",
                  background: "linear-gradient(145deg,#4c3018,#8c5a21)",
                  boxShadow: "0 18px 45px rgba(82,50,20,.2)",
                }}
              >
                <CalendarDays size={28} />
                <span style={{ display: "block", marginTop: 20, opacity: .72, fontSize: 12, fontWeight: 800 }}>
                  TEMPLE EVENTS
                </span>
                <h2 style={{ margin: "7px 0 9px", fontSize: 27 }}>
                  Stay connected
                </h2>
                <p style={{ margin: 0, lineHeight: 1.65, opacity: .82 }}>
                  See festivals, celebrations and special temple programs.
                </p>
                <button
                  type="button"
                  onClick={() => goTo("/events")}
                  style={{
                    marginTop: 20,
                    border: 0,
                    borderRadius: 10,
                    padding: "11px 15px",
                    background: "#fff",
                    color: "#5a391b",
                    fontWeight: 800,
                    cursor: "pointer",
                  }}
                >
                  View Events <ChevronRight size={15} style={{ verticalAlign: "middle" }} />
                </button>
              </div>

              <div
                style={{
                  borderRadius: 24,
                  padding: 26,
                  background: "#fff",
                  border: "1px solid #eee1cd",
                  boxShadow: "0 14px 40px rgba(91,59,29,.06)",
                }}
              >
                <HandHeart size={28} color="#a66b22" />
                <span style={{ display: "block", marginTop: 18, color: "#a66b22", fontSize: 12, fontWeight: 800 }}>
                  POOJA SERVICES
                </span>
                <h2 style={{ margin: "7px 0 9px", fontSize: 25 }}>
                  Explore temple services
                </h2>
                <p style={{ margin: 0, color: "#887462", lineHeight: 1.65 }}>
                  Browse available poojas and ceremonies.
                </p>
                <button
                  type="button"
                  onClick={() => goTo("/book-pooja")}
                  style={{
                    marginTop: 20,
                    border: "1px solid #d9c19d",
                    borderRadius: 10,
                    padding: "11px 15px",
                    background: "#fffaf2",
                    color: "#6c461e",
                    fontWeight: 800,
                    cursor: "pointer",
                  }}
                >
                  Book a Pooja <ChevronRight size={15} style={{ verticalAlign: "middle" }} />
                </button>
              </div>
            </div>
          </section>
        </main>

        <footer
          style={{
            borderTop: "1px solid #eee1cd",
            background: "#fffaf2",
            padding: "24px",
            textAlign: "center",
            color: "#8a7763",
            fontSize: 13,
          }}
        >
          <Landmark size={17} style={{ verticalAlign: "middle", marginRight: 7 }} />
          Public Temple Information Portal • © 2026 Temple Management System
        </footer>
      </div>
    );
  }

  /* =====================================================
     DEVOTEES
  ===================================================== */

  if (path === "/devotees") {
    if (!requireLogin()) {
      return null;
    }

    return (
      <div className="dashboard-page">

        <header className="dashboard-navbar">

          <div className="dashboard-logo">
            <span className="dashboard-logo-icon">
              <Landmark size={28} />
            </span>

            <div>
              <h2>
                Temple Management
              </h2>

              <p>
                Devotee Management
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() =>
              goTo("/dashboard")
            }
          >
            <Home size={17} />
            Dashboard
          </button>

        </header>

        <main className="dashboard-content">

          <div className="dashboard-heading">

            <p className="dashboard-small-title">
              DEVOTEE MANAGEMENT
            </p>

            <h1>
              Devotees
            </h1>

            <p>
              Manage devotee information
              and temple participation.
            </p>

          </div>

          <div className="dashboard-stats">

            <div className="stat-card">

              <div className="stat-icon">
                <Users size={25} />
              </div>

              <div>
                <span className="stat-label">
                  COMMUNITY
                </span>

                <h3>
                  156
                </h3>

                <p>
                  Total Devotees
                </p>
              </div>

            </div>

            <div className="stat-card">

              <div className="stat-icon">
                <ShieldCheck size={25} />
              </div>

              <div>
                <span className="stat-label">
                  ACTIVE
                </span>

                <h3>
                  128
                </h3>

                <p>
                  Active Devotees
                </p>
              </div>

            </div>

          </div>

          <section className="dashboard-section">

            <div className="dashboard-cards">

              <div className="dashboard-card">

                <div className="dashboard-card-icon">
                  <Users size={26} />
                </div>

                <span className="card-small-label">
                  REGISTERED COMMUNITY
                </span>

                <h3>
                  Temple Devotees
                </h3>

                <p>
                  Registered devotees who
                  participate in temple
                  services and activities.
                </p>

                <strong className="large-number">
                  156
                </strong>

              </div>

              <div className="dashboard-card">

                <div className="dashboard-card-icon">
                  <ShieldCheck size={26} />
                </div>

                <span className="card-small-label">
                  ACTIVE COMMUNITY
                </span>

                <h3>
                  Active Devotees
                </h3>

                <p>
                  Devotees currently
                  participating in temple
                  activities.
                </p>

                <strong className="large-number">
                  128
                </strong>

              </div>

            </div>

          </section>

        </main>

        <footer className="dashboard-footer">

          <p>
            <Landmark size={17} />
            Temple Management System
          </p>

          <span>
            © 2026 Temple Management System
          </span>

        </footer>

      </div>
    );
  }

  /* =====================================================
     HOME PAGE
  ===================================================== */

  return (
    <div className="app">

      <header className="navbar">

        <div className="logo">

          <span className="logo-icon">
            <Landmark size={30} />
          </span>

          <div>
            <h2>
              Temple Management
            </h2>

            <p>
              Digital Temple Services
            </p>
          </div>

        </div>

        <nav>

          <a href="#home">
            Home
          </a>

          <a href="#services">
            Services
          </a>

          <a href="#events">
            Events
          </a>

          <a href="#about">
            About
          </a>

          <button
            type="button"
            className="navbar-login-btn"
            onClick={() =>
              goTo("/login")
            }
          >
            <LogIn size={17} />
            Login
          </button>

        </nav>

      </header>

      {/* HERO */}

      <section
        id="home"
        className="hero"
      >

        <div className="hero-content">

          <div className="hero-badge">
            <Sparkles size={15} />
            WELCOME TO OUR TEMPLE
          </div>

          <h1>
            Experience Divine Peace
            <br />
            & Spiritual Blessings
          </h1>

          <p className="description">
            A modern digital platform for
            managing temple services,
            pooja bookings, events,
            donations and devotee
            activities — all in one place.
          </p>

          <div className="hero-buttons">

            <button
              className="primary-btn"
              type="button"
              onClick={() => goTo("/login")}
            >
              <HandHeart size={18} />
              Book a Pooja
              <ChevronRight size={17} />
            </button>

            <button
              className="secondary-btn"
              type="button"
              onClick={() => {

                document
                  .getElementById(
                    "services"
                  )
                  ?.scrollIntoView({
                    behavior: "smooth",
                  });

              }}
            >
              <BookOpen size={18} />
              Explore Services
            </button>

          </div>

          <div className="hero-trust">

            <div>
              <CheckCircle2 size={17} />
              Simple & Secure
            </div>

            <div>
              <CheckCircle2 size={17} />
              Easy Booking
            </div>

            <div>
              <CheckCircle2 size={17} />
              Digital Management
            </div>

          </div>

        </div>

        <div className="hero-image">

          <img
            src="/image/temple-hero.png"
            alt="Temple"
          />

          <div className="hero-image-overlay">

            <div>
              <Landmark size={19} />
            </div>

            <div>
              <strong>
                Temple Services
              </strong>

              <span>
                One place for everything
              </span>
            </div>

          </div>

        </div>

      </section>

      {/* SERVICES */}

      <section
        id="services"
        className="services"
      >

        <div className="section-top">

          <p className="section-small">
            OUR SERVICES
          </p>

          <h2>
            Everything Your Temple Needs
          </h2>

          <p className="section-description">
            Access essential temple services
            through one simple digital platform.
          </p>

        </div>

        <div className="service-cards">

          <div className="service-card">

            <div className="card-icon">
              <HandHeart size={35} />
            </div>

            <span className="card-small-label">
              SERVICE 01
            </span>

            <h3>
              Pooja Booking
            </h3>

            <p>
              Book poojas and special
              religious ceremonies
              conveniently online.
            </p>
            <button
              type="button"
              onClick={() => goTo("/login")}
            >
              <HandHeart size={16} />
              Book a Pooja
            </button>

          </div>

          <div className="service-card">

            <div className="card-icon">
              <CalendarDays size={35} />
            </div>

            <span className="card-small-label">
              SERVICE 02
            </span>

            <h3>
              Temple Events
            </h3>

            <p>
              Stay informed about upcoming
              festivals and special
              temple celebrations.
            </p>

            <button
              type="button"
              onClick={() => {

                if (isLoggedIn) {
                  goTo("/events");
                } else {
                  goTo("/login");
                }

              }}
            >
              <CalendarDays size={16} />
              View Events
            </button>

          </div>

          <div className="service-card">

            <div className="card-icon">
              <Wallet size={35} />
            </div>

            <span className="card-small-label">
              SERVICE 03
            </span>

            <h3>
              Donations
            </h3>

            <p>
              Maintain transparent records
              of temple contributions
              and donations.
            </p>

            <button
              type="button"
              onClick={() => {

                if (isLoggedIn) {
                  goTo("/donations");
                } else {
                  goTo("/login");
                }

              }}
            >
              <Wallet size={16} />
              Manage Donations
            </button>

          </div>

          <div className="service-card">

            <div className="card-icon">
              <Users size={35} />
            </div>

            <span className="card-small-label">
              SERVICE 04
            </span>

            <h3>
              Devotee Management
            </h3>

            <p>
              Organize devotee information
              and monitor temple
              participation.
            </p>

            <button
              type="button"
              onClick={() => {

                if (isLoggedIn) {
                  goTo("/devotees");
                } else {
                  goTo("/login");
                }

              }}
            >
              <Users size={16} />
              Manage Devotees
            </button>

          </div>

        </div>

      </section>

      {/* EVENTS */}

      <section
        id="events"
        className="events"
      >

        <div className="section-top">

          <p className="section-small">
            UPCOMING
          </p>

          <h2>
            Temple Celebrations
          </h2>

          <p className="section-description">
            Stay connected with important
            festivals and spiritual occasions.
          </p>

        </div>

        <div className="event-list">

          <div className="event">

            <div className="event-icon">
              <CalendarDays size={23} />
            </div>

            <span className="event-date">
              SEPTEMBER 2026
            </span>

            <strong>
              Ganesh Chaturthi
            </strong>

            <span>
              Special Pooja &
              Celebration
            </span>

          </div>

          <div className="event">

            <div className="event-icon">
              <HeartHandshake size={23} />
            </div>

            <span className="event-date">
              OCTOBER 2026
            </span>

            <strong>
              Navaratri
            </strong>

            <span>
              9 Days of Divine
              Celebrations
            </span>

          </div>

          <div className="event">

            <div className="event-icon">
              <Landmark size={23} />
            </div>

            <span className="event-date">
              NOVEMBER 2026
            </span>

            <strong>
              Diwali
            </strong>

            <span>
              Deepotsava &
              Special Pooja
            </span>

          </div>

        </div>

      </section>

      {/* ABOUT */}

      <section
        id="about"
        className="about"
      >

        <div className="about-content">

          <div className="about-icon">
            <Landmark size={32} />
          </div>

          <p className="section-small">
            ABOUT THE PLATFORM
          </p>

          <h2>
            Modern Management,
            <br />
            Timeless Devotion
          </h2>

          <p>
            Our Temple Management System
            provides a simple and reliable
            digital platform to manage
            temple services, pooja bookings,
            events, donations and devotee
            activities.
          </p>

        </div>

      </section>

      {/* FOOTER */}

      <footer>

        <div className="footer-brand">

          <Landmark size={21} />

          <div>
            <h3>
              Temple Management System
            </h3>

            <p>
              Digital Temple Services
            </p>
          </div>

        </div>

        <p>
          Experience Divine Peace &
          Spiritual Blessings
        </p>

        <span>
          © 2026 Temple Management System
        </span>

      </footer>

    </div>
  );
}

export default App;