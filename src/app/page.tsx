import Image from "next/image";
import Calendar from "../components/Calendar";
import ContextWrapper from "@/context/ContextWrapper";

export default function Home() {
  return (
    <>
      <ContextWrapper>
        <Calendar />
      </ContextWrapper>
    </>
  );
}
