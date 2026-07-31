import React from 'react';
import { SubmissionData } from './SubmissionDetails.types';
import SubmissionSection from './SubmissionDetailsSection';
import SubmissionHeader from './SubmissionDetailsHeader';
import SubmissionActions from './SubmissionDetailsActions';

interface RegularSubmissionProps {
    submission: SubmissionData;
}

export default function RegularSubmission({ submission }: RegularSubmissionProps) {
    return (
        <div className="space-y-6 py-12 pt-[100px] container mx-auto text-[#ffffff]">
            <SubmissionHeader title={submission.title} />

            {/* Deskripsi */}
            {submission.desc && (
                <SubmissionSection>
                    <p className="text-xl">{submission.desc}</p>
                </SubmissionSection>
            )}

            {/* Tema Desain */}
            {submission.tema_desain && Array.isArray(submission.tema_desain) && (
                <SubmissionSection title="🎯 Tema Desain">
                    <ul className="list-disc ml-6">
                        {submission.tema_desain.map((tema, index) => (
                            <li key={index} className="mb-4">
                                <strong className="mt-5 mb-2 block">{tema.judul}</strong>: {tema.deskripsi}
                                {Array.isArray(tema.struktur_halaman) && (
                                    <ul className="list-decimal mb-4 ml-4 text-sm mt-2">
                                        {tema.struktur_halaman.map((halaman, i) => (
                                            <li key={i}>{halaman}</li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </SubmissionSection>
            )}

            {/* Ketentuan Desain */}
            {submission.ketentuan_desain && (
                <SubmissionSection title="📐 Ketentuan Desain">
                    <ul className="list-disc ml-6">
                        {"jumlah_halaman_minimal" in submission.ketentuan_desain && (
                            <li>Minimal {submission.ketentuan_desain.jumlah_halaman_minimal} halaman</li>
                        )}
                        {"tool_desain" in submission.ketentuan_desain && (
                            <li>Tool: {submission.ketentuan_desain.tool_desain}</li>
                        )}
                        {"prinsip_uiux" in submission.ketentuan_desain && (
                            <li>{submission.ketentuan_desain.prinsip_uiux}</li>
                        )}
                        {"orisinilitas" in submission.ketentuan_desain && (
                            <li>{submission.ketentuan_desain.orisinilitas}</li>
                        )}
                    </ul>
                </SubmissionSection>
            )}

            {/* Pengumpulan Format */}
            {submission.pengumpulan?.format && (
                <SubmissionSection title="📂 Pengumpulan">
                    <p className="text-sm">Format:</p>
                    <ul className="list-disc ml-6">
                        <li>Nama: {submission.pengumpulan.format.nama}</li>
                        <li>Tema: {submission.pengumpulan.format.tema}</li>
                        <li>Link Desain: {submission.pengumpulan.format.link_desain}</li>
                        <li>Deskripsi: {submission.pengumpulan.format.deskripsi}</li>
                    </ul>
                </SubmissionSection>
            )}

            {/* Tujuan */}
            {submission.tujuan && (
                <SubmissionSection title="🎯 Tujuan">
                    <p>{submission.tujuan}</p>
                </SubmissionSection>
            )}

            {/* Ketentuan Teknis */}
            {submission.ketentuan_teknis && (
                <SubmissionSection title="🧩 Ketentuan Teknis">
                    <div className="mt-2">
                        <p className="font-semibold">File & Struktur</p>
                        <ul className="list-disc ml-6">
                            {submission.ketentuan_teknis.utama && (
                                <li>Satu file utama: {submission.ketentuan_teknis.utama}</li>
                            )}
                            {submission.ketentuan_teknis.folder_gambar && (
                                <li>Satu folder gambar (opsional): {submission.ketentuan_teknis.folder_gambar}</li>
                            )}
                            {submission.ketentuan_teknis.contoh && (
                                <li>Contoh: {submission.ketentuan_teknis.contoh}</li>
                            )}
                        </ul>
                    </div>
                </SubmissionSection>
            )}

            {/* Wajib Ada */}
            {submission.wajib_ada && Array.isArray(submission.wajib_ada) && (
                <SubmissionSection title="✅ Wajib Ada (min 7 elemen)">
                    <ul className="list-disc ml-6">
                        {submission.wajib_ada.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </SubmissionSection>
            )}

            {/* Opsional */}
            {submission.opsional && Array.isArray(submission.opsional) && (
                <SubmissionSection title="✨ Opsional (nilai plus)">
                    <ul className="list-disc ml-6">
                        {submission.opsional.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </SubmissionSection>
            )}

            {/* Kriteria Penilaian HTML */}
            {submission.kriteria_penilaian_html && Array.isArray(submission.kriteria_penilaian_html) && (
                <SubmissionSection title="📊 Kriteria Penilaian (100 poin)">
                    <ul className="list-disc ml-6">
                        {submission.kriteria_penilaian_html.map((k, i) => (
                            <li key={i} className="mb-2">
                                {k.judul} ({k.poin} pts)
                                {k.rincian && Array.isArray(k.rincian) && (
                                    <ul className="list-disc ml-6 mt-1">
                                        {k.rincian.map((r, j) => (
                                            <li key={j}>{r}</li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </SubmissionSection>
            )}

            {/* Kriteria Penilaian Regular */}
            {submission.kriteria_penilaian && Array.isArray(submission.kriteria_penilaian) && !submission.kriteria_penilaian_html && (
                <SubmissionSection title="✅ Kriteria Penilaian">
                    <ul className="list-disc ml-6">
                        {submission.kriteria_penilaian.map((k, index) => (
                            <li key={index}>{k}</li>
                        ))}
                    </ul>
                </SubmissionSection>
            )}

            {/* Cara Pengumpulan */}
            {submission.cara_pengumpulan && (
                <SubmissionSection title="📬 Cara Pengumpulan">
                    <ul className="list-disc ml-6">
                        {submission.cara_pengumpulan.nama_file && (
                            <li>Nama file: {submission.cara_pengumpulan.nama_file}</li>
                        )}
                        {submission.cara_pengumpulan.contoh && (
                            <li>Contoh: {submission.cara_pengumpulan.contoh}</li>
                        )}
                        {submission.cara_pengumpulan.zip && (
                            <li>{submission.cara_pengumpulan.zip}</li>
                        )}
                        {submission.cara_pengumpulan.link && (
                            <li>Kirim lewat: {submission.cara_pengumpulan.link}</li>
                        )}
                    </ul>
                </SubmissionSection>
            )}

            {/* Deadline */}
            {submission.deadline && (
                <SubmissionSection title="⏳ Deadline">
                    <p>{submission.deadline.tanggal} - {submission.deadline.waktu}</p>
                </SubmissionSection>
            )}

            {/* Catatan */}
            {submission.catatan && (
                <SubmissionSection className="bg-yellow-900/20">
                    <p className="text-yellow-300">{submission.catatan}</p>
                </SubmissionSection>
            )}

            {/* Reward */}
            {submission.reward && (
                <SubmissionSection className="bg-green-900/20">
                    <p className="text-green-300">🎁 {submission.reward}</p>
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