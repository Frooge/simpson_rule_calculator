import FormComponent from "@/components/form_component";
import Image from "next/image";

export default function Home() {
  return (
      <div className="flex flex-row justify-center w-full max-w-7xl gap-6">
        <FormComponent/>
        <div className="flex flex-start basis-full bg-white"> 
        </div>
      </div>
  );
}
