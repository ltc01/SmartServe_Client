import { useState } from "react";
// import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import {
  MicrophoneIcon,
  LightBulbIcon,
  ChevronDownIcon,
  StarIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";
import PopButton from "./PopButton";

const SpecialInstructions = () => {
  // const [selected, setSelected] = useState(null);
  const [customInstructions, setCustomInstructions] = useState("");

  // const handleSelect = (option) => {
  //   setSelected(option === selected ? null : option);
  // };
  const [selected, setSelected] = useState("");

  const handleSelect = (identifier) => {
    setSelected(identifier);
  };

  const popovers = [
    {
      id: "voice-input",
      color: "bg-blue-500",
      icon: MicrophoneIcon,
      text: "Tap the mic and speak your instructions. We'll transcribe them for you.",
    },
    {
      id: "ai-suggestions",
      color: "bg-orange-700",
      icon: LightBulbIcon,
      text: "Get smart suggestions based on your preferences and past orders.",
    },
    {
      id: "extra-toppings",
      color: "bg-yellow-600",
      icon: StarIcon,
      text: "Add extra toppings. Choose from a variety of fresh options.",
    },
    {
      id: "special-preparation",
      color: "bg-red-700",
      icon: PencilIcon,
      text: "Special preparation requests, like cooking preferences or allergies.",
    },
  ];

  return (
    // bg-teal-700/90
    <div className="p-4 mt-4 text-gray-100 md:mt-0 bg-gradient-to-r from-black/90 to-teal-600/90 border border-gray-300 rounded-lg">
      <h2 className="text-white text-xl font-semibold mb-4">
        Customize Your Order
      </h2>
      <div className="mb-4">
        <label
          htmlFor="additional"
          className="block text-white text-sm font-medium mb-1"
        >
          Additional Instructions
        </label>
        <input
          type="text"
          id="additional"
          className="mt-1 block w-full p-2 bg-slate-100 text-black border outline-none rounded-md focus:ring-black focus:border-black"
          placeholder="Any other specific requests or instructions?"
          value={customInstructions}
          onChange={(e) => setCustomInstructions(e.target.value)}
        />
      </div>
      <p className=" mb-2">
        Use the icons below to add specific instructions or click the{" "}
        <span className="font-medium underline text-teal-200">
          AI Suggestions
        </span>{" "}
        for smart recommendations.
      </p>
      <div className="flex space-x-4 mb-4">
        {popovers.map(({ id, icon, text, color }) => (
          <PopButton
            key={id}
            selected={selected}
            icon={icon}
            onClick={handleSelect}
            text={text}
            identifier={id}
            color={color}
          />
        ))}
      </div>

      {selected === "voice-input" && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-white mb-1">
            Voice Input
          </label>
          <div className="flex items-center">
            <MicrophoneIcon className="h-6 w-6 text-white mr-2" />
            <button className="bg-blue-600 border text-white px-4 py-2 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500">
              Start Speaking
            </button>
          </div>
          <p className="mt-2 text-sm ">
            Your instructions will appear here as you speak.
          </p>
        </div>
      )}

      {selected === "ai-suggestions" && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-white mb-1">
            AI Suggestions:
          </label>
          <div className="bg-black/70 p-4 rounded-md shadow-inner">
            <p className="text-sm text-gray-400">
              Based on our past orders, we suggest trying:
            </p>
            {/* <ul className="list-disc text-slate-500 list-inside mt-2">
              <li>Extra cheese on your pizza</li>
              <li>Substitute with low-sodium options</li>
              <li>Spicy level medium for curries</li>
            </ul> */}
            <ul className="list-none text-gray-300 mt-2 space-y-2">
              <li>
                <div className="flex items-center">
                  <input
                    id="extra-cheese"
                    name="preference"
                    type="radio"
                    className="mr-2"
                  />
                  <label htmlFor="extra-cheese">
                    Extra cheese on your pizza
                  </label>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <input
                    id="low-sodium"
                    name="preference"
                    type="radio"
                    className="mr-2"
                  />
                  <label htmlFor="low-sodium">
                    Substitute with low-sodium options
                  </label>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <input
                    id="medium-spicy"
                    name="preference"
                    type="radio"
                    className="mr-2"
                  />
                  <label htmlFor="medium-spicy">
                    Spicy level medium for curries
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      )}

      {selected === "extra-toppings" && (
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Choose Toppings:
          </label>
          <div className="bg-black/70 p-4 rounded-md shadow-inner grid grid-cols-2 gap-2">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Mushrooms
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Extra Cheese
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Peppers
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Olives
            </label>
          </div>
        </div>
      )}

      {selected === "special-preparation" && (
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Special Preparation
          </label>
          <div className="bg-black/70 p-4 rounded-md shadow-inner">
            <p className="text-sm text-gray-200">
              Let us know if you have specific cooking preferences or allergies.
            </p>
            <input
              type="text"
              className="mt-2 w-full p-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
              placeholder="E.g., no salt, no peanuts"
              value={customInstructions}
              onChange={(e) => setCustomInstructions(e.target.value)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SpecialInstructions;
