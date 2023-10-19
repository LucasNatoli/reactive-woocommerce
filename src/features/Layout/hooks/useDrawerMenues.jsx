import DashboardIcon from "@mui/icons-material/Dashboard";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ReceiptIcon from "@mui/icons-material/Receipt";
import BarChartIcon from "@mui/icons-material/BarChart";
import AssignmentIcon from "@mui/icons-material/Assignment";

const navRoutes = [
  {
    label: "Dashboard",
    route: "/",
    key: "dashboard",
    icon: <DashboardIcon />,
  },
  {
    label: "Ordenes",
    route: "/orders",
    key: "orders",
    icon: <ReceiptIcon />,
  },
  {
    label: "Clientes",
    route: "/customers",
    key: "customers",
    icon: <PeopleIcon />,
  },
  {
    label: "Productos",
    route: "/products",
    key: "products",
    icon: <ShoppingCartIcon />,
  },
  {
    label: "Tiendas",
    route: "/stores",
    key: "stores",
    icon: <StorefrontIcon />,
  },
];
const reportRoutes = [
  {
    label: "Este mes",
    route: "/",
    key: "report-01",
    icon: <AssignmentIcon />,
  },
  {
    label: "Último Trimestre",
    route: "/",
    key: "report-02",
    icon: <AssignmentIcon />,
  },
  {
    label: "Anual a Hoy",
    route: "/",
    key: "report-03",
    icon: <AssignmentIcon />,
  },
  {
    label: "Reportes",
    route: "/reports",
    key: "reports",
    icon: <AssignmentIcon />,
  },
  {
    label: "Integracion",
    route: "/stores",
    key: "stores",
    icon: <AssignmentIcon />,
  },
];

export const useDrawerMenues = () => {
  return { navRoutes, reportRoutes };
};
