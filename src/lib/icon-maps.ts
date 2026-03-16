import { Instagram, Linkedin, Facebook } from "lucide-react";
import {
  Zap, Radio, Bot, Cpu, Activity, HeartPulse, Factory, Sparkles, BrainCircuit, Monitor,
} from "lucide-react";

export const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Instagram,
  Linkedin,
  Facebook,
};

export const chapterIcons: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  Zap, Radio, Bot, Cpu, Activity, HeartPulse, Factory, Sparkles, BrainCircuit, Monitor,
};
