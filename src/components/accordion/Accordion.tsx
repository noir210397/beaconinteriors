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
} from "@radix-ui/react-accordion";
import { BiChevronDown } from "react-icons/bi";

function AccordionRoot(props: {
  type: "single" | "multiple";
  children: ReactNode;
}) {
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
  ...rest
}: AccordionHeaderProps & { hasIcon: boolean }) {
  return (
    <Header {...rest} asChild>
      <AccordionTrigger asChild className="trigger py-2">
        <div className="flex min-w-full justify-between">
          <div className="font-semibold">{children}</div>
          {hasIcon && (
            <span>
              <BiChevronDown className={`chevron text-xl`} />
            </span>
          )}
        </div>
      </AccordionTrigger>
    </Header>
  );
}
export { AccordionRoot, AccordionContent, AccordionHeader, AccordionItem };
