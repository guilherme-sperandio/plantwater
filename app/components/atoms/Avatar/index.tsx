import Image from "next/image";

type AvatarProps = {
  url?: string;
};

export const Avatar = ({
  url = "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses-green-hair_23-2149436201.jpg?w=826&t=st=1690598682~exp=1690599282~hmac=25a2634b3992fe116b6748296baaad60678e77c5ce9a8f023a2703ede0a67f11",
}: AvatarProps) => {
  return (
    <div className="relative w-12 h-12  ">
      <Image
        src={url}
        fill
        alt="Imagem de perfil do usuário"
        className="rounded-full"
      />
    </div>
  );
};
