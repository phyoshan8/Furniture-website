import { useState } from "react";
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

interface filterListProps {
  filterList: { types: Category[]; categories: Category[] };
  onSubmit: (filters: {
    selectedCategories: string[];
    selectedTypes: string[];
  }) => void;
  initialFilters: { selectedCategories: string[]; selectedTypes: string[] };
}

// ... (imports and interface remain the same)

export default function ProductFilter({
  filterList,
  onSubmit,
  initialFilters,
}: filterListProps) {
  // Local state to track selected checkboxes before submission
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    initialFilters.selectedCategories,
  );
  const [selectedTypes, setSelectedTypes] = useState<string[]>(
    initialFilters.selectedTypes,
  );

  // Helper functions remain correct
  const handleCategoryChange = (id: string, checked: boolean) => {
    setSelectedCategories((prev) =>
      checked ? [...prev, id] : prev.filter((catId) => catId !== id),
    );
  };

  const handleTypeChange = (id: string, checked: boolean) => {
    setSelectedTypes((prev) =>
      checked ? [...prev, id] : prev.filter((typeId) => typeId !== id),
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // OPTIONAL: Add console.log here to confirm the arrays are correct before sending.
    // console.log({ selectedCategories, selectedTypes });
    onSubmit({
      selectedCategories: selectedCategories,
      selectedTypes: selectedTypes,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col pr-4 md:flex-row lg:flex-col"
    >
      <div className="md:w-1/2 lg:w-full">
        <FieldSet>
          <FieldGroup className="gap-3">
            <FieldLegend variant="label">
              <h2 className="mt-8 text-xl font-semibold">Products made of</h2>
            </FieldLegend>
            {filterList.categories.map((category) => (
              <Field orientation="horizontal" key={category.id}>
                <Checkbox
                  id={`cat-${category.id}`}
                  // 🛑 FIX 1: Change defaultChecked to checked. Check if the ID is in the local state.
                  checked={selectedCategories.includes(category.id)}
                  onCheckedChange={(checked) =>
                    handleCategoryChange(category.id, checked as boolean)
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

      <div className="md:w-1/2 lg:w-full">
        <FieldSet>
          <FieldGroup className="gap-3">
            <FieldLegend variant="label">
              <h2 className="mt-8 text-xl font-semibold">Types of Product</h2>
            </FieldLegend>
            {filterList.types.map((type) => (
              <Field orientation="horizontal" key={type.id}>
                <Checkbox
                  id={`type-${type.id}`}
                  // 🛑 FIX 2: Change defaultChecked to checked. Check if the ID is in the local state.
                  checked={selectedTypes.includes(type.id)}
                  onCheckedChange={(checked) =>
                    handleTypeChange(type.id, checked as boolean)
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
      <Button
        type="submit"
        className="mt-4 max-w-40 rounded-2xl border-4 px-8 py-6 transition-colors active:bg-green-900"
      >
        Apply Filters
      </Button>
    </form>
  );
}
