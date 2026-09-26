// Explicit icon registry keeps lucide tree-shaken while letting data files reference icons by name.
import {
  BadgeCheck, Cloud, Container, Database, FileSignature, Gauge, HeartPulse, Hospital, Layers, Layout, Lock,
  MessagesSquare, MonitorSmartphone, Network, Plug, Server, ShieldCheck, ShoppingBag, Sparkles, Users, Workflow, Wrench,
} from 'lucide-react'

const icons = {
  BadgeCheck, Cloud, Container, Database, FileSignature, Gauge, HeartPulse, Hospital, Layers, Layout, Lock,
  MessagesSquare, MonitorSmartphone, Network, Plug, Server, ShieldCheck, ShoppingBag, Sparkles, Users, Workflow, Wrench,
}

export function getIcon(name) {
  return icons[name] ?? Layers
}
