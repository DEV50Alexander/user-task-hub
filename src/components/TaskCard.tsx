import { Task, User } from "@/types";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Pencil, Trash2 } from "lucide-react";

interface TaskCardProps {
  task: Task;
  user?: User;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
}

const statusColors = {
  pending: "bg-yellow-100 text-yellow-800",
  "in-progress": "bg-blue-100 text-blue-800",
  completed: "bg-green-100 text-green-800",
};

export function TaskCard({ task, user, onEdit, onDelete }: TaskCardProps) {
  return (
    <Card className="card-hover">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold">{task.title}</h3>
          <Badge className={statusColors[task.status]}>{task.status}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{task.description}</p>
        {user && (
          <p className="text-xs text-muted-foreground mt-2">
            Assigned to: {user.name}
          </p>
        )}
        <p className="text-xs text-muted-foreground mt-1">
          Created: {new Date(task.createdAt).toLocaleDateString()}
        </p>
      </CardContent>
      <CardFooter className="flex justify-end space-x-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onEdit(task)}
          className="text-mint-600 hover:text-mint-700 hover:bg-mint-50"
        >
          <Pencil className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onDelete(task.id)}
          className="text-destructive hover:text-destructive hover:bg-destructive/10"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}