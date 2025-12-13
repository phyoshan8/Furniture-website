import { Checkbox } from "@/components/ui/checkbox";
import type { Category } from "@/types";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Button } from "../ui/button";
import { useState } from "react";

interface filterListProps {
  filterList: { types: Category[]; categories: Category[] };
  onFilterSubmit?: (filters: { categories: string[]; types: string[] }) => void;
}

export default function ProductFilter({
  filterList,
  onFilterSubmit,
}: filterListProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  function toggleSelected(
    list: string[],
    setList: (v: string[]) => void,
    id: string,
  ) {
    setList(list.includes(id) ? list.filter((i) => i !== id) : [...list, id]);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onFilterSubmit?.({ categories: selectedCategories, types: selectedTypes });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col pr-4 md:flex-row lg:flex-col"
    >
      <div className="md:w-1/2">
        <FieldSet>
          <FieldGroup className="gap-3">
            <FieldLegend variant="label">
              <h2 className="mt-8 text-xl font-semibold"> Products made of</h2>
            </FieldLegend>
            {filterList.categories.map((category) => (
              <Field key={category.id} orientation="horizontal">
                <Checkbox
                  id={`cat-${category.id}`}
                  checked={selectedCategories.includes(category.id)}
                  onCheckedChange={() =>
                    toggleSelected(
                      selectedCategories,
                      setSelectedCategories,
                      category.id,
                    )
                  }
                />
                <FieldLabel
                  htmlFor={`cat-${category.id}`}
                  className="font-normal"
                >
                  {category.label}
                </FieldLabel>
              </Field>
            ))}
          </FieldGroup>
        </FieldSet>
      </div>

      <div className="md:w-1/2">
        <FieldSet>
          <FieldGroup className="gap-3">
            <FieldLegend variant="label">
              <h2 className="mt-8 text-xl font-semibold">Types of Product</h2>
            </FieldLegend>
            {filterList.types.map((type) => (
              <Field key={type.id} orientation="horizontal">
                <Checkbox
                  id={`type-${type.id}`}
                  checked={selectedTypes.includes(type.id)}
                  onCheckedChange={() =>
                    toggleSelected(selectedTypes, setSelectedTypes, type.id)
                  }
                />
                <FieldLabel htmlFor={`type-${type.id}`} className="font-normal">
                  {type.label}
                </FieldLabel>
              </Field>
            ))}
          </FieldGroup>
        </FieldSet>
      </div>

      <Button type="submit">Submit</Button>
    </form>
  );
}
