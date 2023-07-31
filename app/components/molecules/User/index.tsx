import { Avatar } from "../../atoms/Avatar";

type UserProps = {
  name: string;
  email: string;
};

export const User = ({ name, email }: UserProps) => {
  return (
    <div className="flex items-center">
      <Avatar />
      <div className="ml-3">
        <h3 className="text-black font-medium mb-1">{name}</h3>
        <p className="text-gray text-sm">{email}</p>
      </div>
    </div>
  );
};
