import React, { ReactNode } from "react";
// import styles from "./accordion.css";
import {
  Accordion,
  AccordionItem,
  AccordionContent as Content,
  AccordionHeader as Header,
  AccordionTrigger,
  AccordionHeaderProps,
  AccordionContentProps,
  AccordionSingleProps,
  AccordionMultipleProps,
} from "@radix-ui/react-accordion";
import { BiChevronDown } from "react-icons/bi";
import { twMerge } from "tailwind-merge";

function AccordionRoot(props: AccordionSingleProps | AccordionMultipleProps) {
  return <Accordion type={props.type}>{props.children}</Accordion>;
}
function AccordionContent({
  children,
  animate,
  className,
  ...rest
}: AccordionContentProps & { animate: boolean }) {
  return (
    <Content {...rest} asChild>
      <div className={`${animate && "animate-content"}`}>{children}</div>
    </Content>
  );
}
function AccordionHeader({
  hasIcon,
  children,
  className,
  ...rest
}: AccordionHeaderProps & { hasIcon: boolean }) {
  return (
    <Header {...rest} asChild>
      <AccordionTrigger asChild className={twMerge("trigger py-2 ", className)}>
        <div className="flex min-w-full justify-between">
          <div className="font-semibold">{children}</div>
          {hasIcon && (
            <span>
              <BiChevronDown className={`chevron text-2xl`} />
            </span>
          )}
        </div>
      </AccordionTrigger>
    </Header>
  );
}
export { AccordionRoot, AccordionContent, AccordionHeader, AccordionItem };
