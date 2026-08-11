import { notFound } from "next/navigation";
import { VocabUnitLoader } from "@/components/vocab/VocabUnitLoader";
import { getVocabPackSummary } from "@/data/vocab/manifest";

export default async function VocabUnitPage({
  params,
}: PageProps<"/vocab/[unitId]">) {
  const { unitId: unitIdRaw } = await params;
  const unitId = Number(unitIdRaw);

  if (!Number.isInteger(unitId) || !getVocabPackSummary(unitId)) {
    notFound();
  }

  return <VocabUnitLoader unitId={unitId} />;
}
