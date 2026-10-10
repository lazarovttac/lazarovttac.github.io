import type { ImageMetadata } from "astro";
import { image } from "../assets/images";
import type { Label, TranslationKey } from "../i18n/translations";

export interface Project {
  icon: ImageMetadata;
  title: Label;
  tagKey: TranslationKey;
  descriptionKey: TranslationKey;
  stack: string;
  /** Where clicking the card (outside its links) navigates. */
  href?: string;
  links: { href: string; label: string }[];
  /** Shown in place of links for projects that aren't public. */
  internalNoteKey?: TranslationKey;
}

export const projects: Project[] = [
  {
    icon: image("icons/tradespark.png"),
    title: { text: "AI Portfolio Rotation (TradeSpark)" },
    tagKey: "proj1_tag",
    descriptionKey: "proj1_desc",
    stack: "Python · TensorFlow/Keras · Pandas · YAML MLOps",
    links: [],
    internalNoteKey: "proj1_internal",
  },
  {
    icon: image("icons/ceapp.png"),
    title: { text: "CEApp (Red de CEAs)" },
    tagKey: "proj2_tag",
    descriptionKey: "proj2_desc",
    stack: "React · Sass · Firebase · Figma",
    href: "/ceapp.html",
    links: [
      { href: "https://red-cea.web.app", label: "red-cea.web.app ↗" },
      { href: "https://ceabragado.com", label: "ceabragado.com ↗" },
      { href: "https://ceadiecinueve.com", label: "ceadiecinueve.com ↗" },
    ],
  },
  {
    icon: image("icons/guesstheclip.png"),
    title: { text: "GuessTheClip" },
    tagKey: "proj6_tag",
    descriptionKey: "proj6_desc",
    stack: "React · TypeScript · Firebase",
    href: "https://guesstheclip.com",
    links: [{ href: "https://guesstheclip.com", label: "guesstheclip.com ↗" }],
  },
  {
    icon: image("icons/my-automata.png"),
    title: { text: "My Automata" },
    tagKey: "proj4_tag",
    descriptionKey: "proj4_desc",
    stack: "React · Firebase · Figma",
    href: "/automaton_disigner.html",
    links: [{ href: "https://my-automata.web.app", label: "my-automata.web.app ↗" }],
  },
  {
    icon: image("icons/decimas.png"),
    title: { text: "Editor de Décimas" },
    tagKey: "proj7_tag",
    descriptionKey: "proj7_desc",
    stack: "HTML · CSS · JavaScript · Claude",
    href: "/decimas.html",
    links: [
      {
        href: "https://github.com/lazarovttac/decimas",
        label: "github.com/lazarovttac/decimas ↗",
      },
    ],
  },
  {
    icon: image("icons/semillero.png"),
    title: { text: "Semillero" },
    tagKey: "proj3_tag",
    descriptionKey: "proj3_desc",
    stack: "React · Sass · Firebase · Figma",
    href: "/semillero.html",
    links: [
      {
        href: "https://semillero-personas.web.app",
        label: "semillero-personas.web.app ↗",
      },
    ],
  },
  {
    icon: image("icons/games.png"),
    title: { key: "proj5_title" },
    tagKey: "proj5_tag",
    descriptionKey: "proj5_desc",
    stack: "Unity · C#",
    href: "/my-games.html",
    links: [],
  },
];
