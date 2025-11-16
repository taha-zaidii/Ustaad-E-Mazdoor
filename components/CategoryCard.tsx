import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  count: string;
}

const CategoryCard = ({ icon: Icon, title, count }: CategoryCardProps) => {
  return (
    <Card className="group p-8 hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-[1.02] border-2 hover:border-primary/50 bg-gradient-card backdrop-blur-sm">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-16 h-16 rounded-2xl bg-gradient-primary/10 flex items-center justify-center group-hover:bg-gradient-primary/20 transition-colors">
          <Icon className="w-8 h-8 text-primary" strokeWidth={2.5} />
        </div>
        <div>
          <h3 className="font-bold text-lg mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground font-medium">{count}</p>
        </div>
      </div>
    </Card>
  );
};

export default CategoryCard;
