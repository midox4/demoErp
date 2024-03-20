import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const Cards = () => {
  return (
    <Card className="mt-3 w-[280px] p-5 bg-slate-100 rounded-xxl space-y-3 md:w-[320px]">
      <CardHeader color="blue-gray" className="relative">
        <img
          src="https://media.istockphoto.com/id/1308840409/fr/photo/num%C3%A9risation-du-code-%C3%A0-barres-du-colis-avant-lexp%C3%A9dition.jpg?s=612x612&w=0&k=20&c=gN5CUV6M4khWt7poK75uo9ccCrzZITcBO6aC5zHjNGs="
          alt="card-image"
          className="rounded-xxl"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2 font-bold">
          CPX / Colis Posteaux
        </Typography>
        <Typography>
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to &quot
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button className="px-3 py-2 bg-blue-500 text-white">Read More</Button>
      </CardFooter>
    </Card>
  );
};

export default Cards;
