import React from 'react';
import { SubmissionData } from './SubmissionDetails.types';
import SubmissionSection from './SubmissionDetailsSection';
import SubmissionHeader from './SubmissionDetailsHeader';
import SubmissionActions from './SubmissionDetailsActions';

interface CapstoneSubmissionProps {
    submission: SubmissionData;
}

export default function CapstoneSubmission({ submission }: CapstoneSubmissionProps) {
    return (
        <div className="space-y-6 py-12 pt-[100px] container mx-auto text-[#ffffff]">
            <SubmissionHeader title={submission.title} />

            {/* Deskripsi */}
            {submission.desc && (
                <SubmissionSection>
                    <p>{submission.desc}</p>
                </SubmissionSection>
            )}

            {/* Tujuan */}
            {submission.tujuan && (
                <SubmissionSection title="🎯 Tujuan">
                    <p>{submission.tujuan}</p>
                </SubmissionSection>
            )}

            {/* Tema Desain */}
            {submission.tema_desain && Array.isArray(submission.tema_desain) && (
                <SubmissionSection title="📌 Tema Proyek">
                    <ul className="list-disc ml-6">
                        {submission.tema_desain.map((tema, i) => (
                            <li key={i} className="mb-3">
                                <strong>{tema.judul}</strong> – {tema.deskripsi}
                                {Array.isArray(tema.struktur_halaman) && (
                                    <ul className="list-decimal ml-6 text-sm mt-2">
                                        {tema.struktur_halaman.map((hal, j) => (
                                            <li key={j}>{hal}</li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </SubmissionSection>
            )}

            {/* Ketentuan Teknis */}
            {submission.ketentuan_teknis && (
                <SubmissionSection title="🧩 Ketentuan Teknis">
                    {Object.entries(submission.ketentuan_teknis).map(([key, val], i) => (
                        <div key={i} className="mb-4">
                            <p className="font-semibold capitalize">{key}</p>
                            {Array.isArray(val) ? (
                                <ul className="list-disc ml-6 text-sm">
                                    {val.map((v, j) => (
                                        <li key={j}>{v}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-sm">{val}</p>
                            )}
                        </div>
                    ))}
                </SubmissionSection>
            )}

            {/* Kriteria Penilaian */}
            {submission.kriteria_penilaian && (
                <SubmissionSection title="📊 Kriteria Penilaian">
                    <ul className="list-disc ml-6">
                        {submission.kriteria_penilaian.map((k, i) => (
                            <li key={i}>{k}</li>
                        ))}
                    </ul>
                </SubmissionSection>
            )}

            {/* Distinction */}
            {submission.distinction && (
                <SubmissionSection title="🏆 Distinction">
                    <ul className="list-disc ml-6">
                        {Object.entries(submission.distinction).map(([k, v], i) => (
                            <li key={i}>
                                {k}: {v}
                            </li>
                        ))}
                    </ul>
                </SubmissionSection>
            )}

            {/* Pengumpulan */}
            {submission.pengumpulan && (
                <SubmissionSection title="📂 Pengumpulan">
                    {submission.pengumpulan.wajib && (
                        <ul className="list-disc ml-6">
                            {submission.pengumpulan.wajib.map((w, i) => (
                                <li key={i}>{w}</li>
                            ))}
                        </ul>
                    )}
                    {submission.pengumpulan.catatan && (
                        <p className="mt-2 text-yellow-300">
                            {submission.pengumpulan.catatan}
                        </p>
                    )}
                </SubmissionSection>
            )}

            {/* Tips */}
            {submission.tips && (
                <SubmissionSection title="💡 Tips (Opsional)">
                    {Object.entries(submission.tips).map(([key, val], i) => (
                        <div key={i} className="mb-3">
                            <p className="font-semibold capitalize">{key}</p>
                            {Array.isArray(val) ? (
                                <ul className="list-disc ml-6 text-sm">
                                    {val.map((t, j) => (
                                        <li key={j}>{t}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-sm">{val}</p>
                            )}
                        </div>
                    ))}
                </SubmissionSection>
            )}

            {/* Deadline */}
            {submission.deadline && (
                <SubmissionSection title="⏳ Deadline">
                    <p>
                        {submission.deadline.tanggal} - {submission.deadline.waktu}
                    </p>
                </SubmissionSection>
            )}

            {/* Catatan */}
            {submission.catatan && (
                <SubmissionSection className="bg-yellow-900/20">
                    <p className="text-yellow-300">{submission.catatan}</p>
                </SubmissionSection>
            )}

            {/* Kontak */}
            {submission.kontak && (
                <SubmissionSection>
                    <p>📞 {submission.kontak}</p>
                </SubmissionSection>
            )}

            {/* Motivasi */}
            {submission.motivasi && (
                <SubmissionSection>
                    <p>{submission.motivasi}</p>
                </SubmissionSection>
            )}

            {/* Submit Button */}
            <SubmissionActions status={submission.status} submissionUrl={submission.submissionUrl} />
        </div>
    );
}