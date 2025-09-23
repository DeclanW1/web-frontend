import Pulse from "../../components/motion/Pulse";


export default function ContactForm() {
  return (
    <Pulse>
    <form className="font-mono grid grid-cols-1 gap-4">
      <Input name="name" placeholder="Name" />
      <Input type="email" name="email" placeholder="Email" />
      <Input name="telephone" placeholder="Telephone" />
      <Input name="company" placeholder="Company" />
      <Textarea
        name="message"
        placeholder="I need help with..."
        className="h-12 resize-none overflow-hidden"
        style={{ paddingTop: 0, paddingBottom: 0, lineHeight: "3rem" }}/>

      {/* Submit button */}
      <div className="mt-4 flex justify-end">
        <button
          type="button"
          className="font-mono rounded-none bg-white px-8 py-3 text-rose-700 shadow-sm hover:bg-white focus:outline-none focus:ring-2 focus:ring-white">
          Submit now
        </button>
      </div>
    </form>
    </Pulse>
  );
}

// Input Component
type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
function Input(props: InputProps) {
  return (
    <input
      {...props}
      className={`font-mono h-12 w-full rounded-none border border-white bg-transparent px-4 text-white placeholder-white outline-none focus:border-white focus:ring-0 ${props.className ?? ""}`}
    />
  );
}

// Text area component 
type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;
function Textarea(props: TextareaProps) {
  return (
    <textarea
      {...props}
      className={`font-mono w-full rounded-none border border-white bg-transparent px-4 text-white placeholder-white outline-none focus:border-white focus:ring-0 ${props.className ?? ""}`}
    />
  );
}
