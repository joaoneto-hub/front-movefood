import { Button } from "@/components/ui/button";
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Table,
} from "@/components/ui/table";
import {
  ClipboardList,
  Home,
  Pizza,
  Star,
  UtensilsCrossed,
  BadgePlus,
  SquarePen,
} from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const Itens: React.FC = () => {
  const produtos = [
    {
      id: "873495",
      nome: "X-Tudo",
      desc: "X-tudo casa",
      preco: 25.9,
      disponivel: true,
      ingredientes: {
        pao: "Pão de hambúrguer",
        carne: "Carne bovina 200g",
        queijo: "Queijo cheddar",
        bacon: "Bacon crocante",
        salada: "Alface, tomate, cebola",
        ovo: "Ovo frito",
        molho: "Molho especial",
      },
    },
    {
      id: "873495",
      nome: "X-Bacon",
      preco: 19.9,
      disponivel: true,
      desc: "X-Baconda casa",
      ingredientes: {
        pao: "Pão de hambúrguer",
        carne: "Carne bovina 150g",
        queijo: "Queijo cheddar",
        bacon: "Bacon crocante",
        molho: "Maionese artesanal",
      },
    },
    {
      id: "873495",
      nome: "X-Frango",
      preco: 22.5,
      disponivel: false,
      desc: "X-Frango da casa",
      ingredientes: {
        pao: "Pão de hambúrguer",
        frango: "Peito de frango grelhado",
        queijo: "Queijo prato",
        salada: "Alface e tomate",
        molho: "Maionese de ervas",
      },
    },
    {
      id: "873495",
      nome: "Veggie Burger",
      preco: 18.9,
      disponivel: true,
      desc: "Veggie Burger da casa",
      ingredientes: {
        pao: "Pão integral",
        burgerVegano: "Hambúrguer de grão-de-bico",
        queijoVegano: "Queijo vegano",
        salada: "Alface, tomate, cebola roxa",
        molho: "Molho de mostarda e mel",
      },
    },
  ];

  return (
    <Dialog>
      <div className="flex flex-col gap-4">
        <h1 className="flex justify-between items-center gap-3 text-3xl font-bold tracking-tight pl-4 pt-4 pr-4">
          Produtos
          <DialogTrigger asChild>
            <Button className="text-sm font-medium text-white rounded-md gap-x-2">
              <BadgePlus />
              Novo produto
            </Button>
          </DialogTrigger>
        </h1>
        <div className="space-y-2.5 p-4">
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[140px]">Ações</TableHead>
                  <TableHead className="w-[140px]">Identificador</TableHead>
                  <TableHead className="w-[180px]">Produto</TableHead>
                  <TableHead className="w-[140px]">Status</TableHead>
                  <TableHead>Descrição</TableHead>
                  <TableHead className="w-[140px]">Valor</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {produtos.map((prods) => (
                  <TableRow key={prods.id}>
                    <TableCell
                      onClick={() => console.log("Chamou")}
                      className="cursor-pointer"
                    >
                      <SquarePen />
                    </TableCell>
                    <TableCell>{prods.id}</TableCell>
                    <TableCell>{prods.nome}</TableCell>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        <span
                          className={`inline-block w-3 h-3 rounded-full ${
                            prods.disponivel ? "bg-green-500" : "bg-red-500"
                          }`}
                        ></span>
                        {prods.disponivel ? "Disponível" : "Indisponível"}
                      </div>
                    </TableCell>

                    <TableCell>{prods.desc}</TableCell>
                    <TableCell>{prods.preco}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle className="text-left">Cadastrar produto</DialogTitle>
          <DialogDescription className="text-left">
            Cadastre seu produto aqui com valores preços e igrediantes!
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Produto" className="text-left">
              Produto:
            </Label>
            <Input id="name" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Status" className="text-left">
              Igredientes:
            </Label>
            <Select>
              <SelectTrigger className="col-span-3">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pao">Pão</SelectItem>
                <SelectItem value="mortadela">Mortadela</SelectItem>
                <SelectItem value="ovo">Ovo</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Status" className="text-left">
              Status:
            </Label>
            <Select>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Disponível" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Disponível</SelectItem>
                <SelectItem value="dark">Indisponível</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Valor" className="text-left">
              Valor:
            </Label>
            <Input id="name" className="col-span-3" type="number" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Descricao" className="text-left">
              Descrição:
            </Label>
            <Textarea className="col-span-3"></Textarea>
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button>Cancelar</Button>
          </DialogClose>

          <Button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Salvar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Itens;
