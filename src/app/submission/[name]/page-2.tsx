"use client";

import { Element } from "react-scroll";
import { useParams } from "next/navigation";
import dynamic from "next/dynamic";

const Aurora = dynamic(() => import("@/utils/Aurora"), { ssr: false });

import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

import "@/assets/css/style.css";

import submissionData from "@/data/submission.json";

export default function DetailsSubmission() {
	const { name } = useParams();
	const decodedName = decodeURIComponent(name as string);
	const submission = submissionData.find((item) => item.name === decodedName);

	return (
		<>
			<Preloader />
			<Navbar />
			<Banner className="pt-[100px] bg-[#171a26]" />

			<main className="relative min-h-screen bg-[#171a26] overflow-hidden pb-[100px]">
				<Aurora />

				<Element
					name="submission"
					className="relative z-10 px-6 md:px-20 text-[#ffffff]"
				>
					{submission ? (
						submission.name === "capstone-submission" ? (							
							<div className="space-y-6 py-12 pt-[100px] container mx-auto text-[#ffffff]">
								<h1 className="text-2xl font-bold text-center">
									{submission.title}
								</h1>

								{/* Deskripsi */}
								{submission.desc && (
									<section className="bg-[#1e1e2f] rounded-lg p-6 shadow-md">
										<p>{submission.desc}</p>
									</section>
								)}

								{/* Tujuan */}
								{submission.tujuan && (
									<section className="bg-[#1e1e2f] rounded-lg p-6 shadow-md">
										<h2 className="text-xl font-semibold">🎯 Tujuan</h2>
										<p>{submission.tujuan}</p>
									</section>
								)}

								{/* Tema Desain */}
								{submission.tema_desain && Array.isArray(submission.tema_desain) && (
									<section className="bg-[#1e1e2f] rounded-lg p-6 shadow-md">
										<h2 className="text-xl font-semibold">📌 Tema Proyek</h2>
										<ul className="list-disc ml-6">
											{submission.tema_desain.map((tema: any, i: number) => (
												<li key={i}>
													<strong>{tema.judul}</strong> – {tema.deskripsi}
													{Array.isArray(tema.struktur_halaman) && (
														<ul className="list-decimal ml-6 text-sm">
															{tema.struktur_halaman.map(
																(hal: string, j: number) => (
																	<li key={j}>{hal}</li>
																)
															)}
														</ul>
													)}
												</li>
											))}
										</ul>
									</section>
								)}

								{/* Ketentuan Teknis */}
								{submission.ketentuan_teknis && (
									<section className="bg-[#1e1e2f] rounded-lg p-6 shadow-md">
										<h2 className="text-xl font-semibold">🧩 Ketentuan Teknis</h2>
										{Object.entries(submission.ketentuan_teknis).map(
											([key, val]: any, i) => (
												<div key={i}>
													<p className="font-semibold capitalize">{key}</p>
													<ul className="list-disc ml-6 text-sm">
														{Array.isArray(val) &&
															val.map((v: string, j: number) => (
																<li key={j}>{v}</li>
															))}
													</ul>
												</div>
											)
										)}
									</section>
								)}

								{/* Kriteria Penilaian */}
								{submission.kriteria_penilaian && (
									<section className="bg-[#1e1e2f] rounded-lg p-6 shadow-md">
										<h2 className="text-xl font-semibold">📊 Kriteria Penilaian</h2>
										<ul className="list-disc ml-6">
											{submission.kriteria_penilaian.map(
												(k: string, i: number) => (
													<li key={i}>{k}</li>
												)
											)}
										</ul>
									</section>
								)}

								{/* Distinction */}
								{submission.distinction && (
									<section className="bg-[#1e1e2f] rounded-lg p-6 shadow-md">
										<h2 className="text-xl font-semibold">🏆 Distinction</h2>
										<ul className="list-disc ml-6">
											{Object.entries(submission.distinction).map(
												([k, v], i) => (
													<li key={i}>
														{k}: {v}
													</li>
												)
											)}
										</ul>
									</section>
								)}

								{/* Pengumpulan */}
								{submission.pengumpulan && (
									<section className="bg-[#1e1e2f] rounded-lg p-6 shadow-md">
										<h2 className="text-xl font-semibold">📂 Pengumpulan</h2>
										<ul className="list-disc ml-6">
											{submission.pengumpulan.wajib?.map((w: string, i: number) => (
												<li key={i}>{w}</li>
											))}
										</ul>
										{submission.pengumpulan.catatan && (
											<p className="mt-2 text-yellow-300">
												{submission.pengumpulan.catatan}
											</p>
										)}
									</section>
								)}

								{/* Tips */}
								{submission.tips && (
									<section className="bg-[#1e1e2f] rounded-lg p-6 shadow-md">
										<h2 className="text-xl font-semibold">💡 Tips (Opsional)</h2>
										{Object.entries(submission.tips).map(([k, v]: any, i) => (
											<div key={i}>
												<p className="font-semibold capitalize">{k}</p>
												{Array.isArray(v) ? (
													<ul className="list-disc ml-6 text-sm">
														{v.map((t: string, j: number) => (
															<li key={j}>{t}</li>
														))}
													</ul>
												) : (
													<p className="text-sm">{v}</p>
												)}
											</div>
										))}
									</section>
								)}

								{/* Deadline */}
								{submission.deadline && (
									<section className="bg-[#1e1e2f] rounded-lg p-6 shadow-md">
										<h2 className="text-xl font-semibold">⏳ Deadline</h2>
										<p>
											{submission.deadline.tanggal} - {submission.deadline.waktu}
										</p>
									</section>
								)}

								{/* Catatan */}
								{submission.catatan && (
									<section className="bg-[#1e1e2f] rounded-lg p-6 shadow-md">
										<p className="text-yellow-300">{submission.catatan}</p>
									</section>
								)}

								{/* Kontak */}
								{submission.kontak && (
									<section className="bg-[#1e1e2f] rounded-lg p-6 shadow-md">
										<p>📞 {submission.kontak}</p>
									</section>
								)}

								{/* Motivasi */}
								{submission.motivasi && (
									<section className="bg-[#1e1e2f] rounded-lg p-6 shadow-md">
										<p>{submission.motivasi}</p>
									</section>
								)}

								{/* Tombol Submit */}
								{ submission.status === "Open" ? (
									<a
										href={submission.submissionUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="bg-[#2e53b0] text-[#ffffff] text-xxl py-3 w-full px-5 rounded-xl hover:bg-blue-600 transition"
									>
										SUBMIT
									</a>
								) : (
									<p className="text-[#ffffff] text-center text-2xl">
										Status: {submission.status}
									</p>
								)}
							</div>
						) : (
							<div className="space-y-6 py-12 pt-[100px] container mx-auto text-[#ffffff]">
								<h1 className="text-2xl font-bold text-center text-[#ffffff]">
									{submission.title}
								</h1>

								{submission.desc && (
									<section className="bg-[#1e1e2f] rounded-lg p-6 shadow-md">
										<p className="text-xl text-[#ffffff]">{submission.desc}</p>
									</section>
								)}

								{submission.tema_desain &&
									Array.isArray(submission.tema_desain) && (
										<section className="bg-[#1e1e2f] rounded-lg p-6 shadow-md">
											<h2 className="text-xl mb-2 font-semibold text-[#ffffff]">
												🎯 Tema Desain
											</h2>
											<ul className="list-disc ml-6">
												{submission.tema_desain.map(
													(tema: any, index: number) => (
														<li key={index}>
															<strong className="mt-5 mb-2">{tema.judul}</strong>:{" "}
															{tema.deskripsi}
															{Array.isArray(tema.struktur_halaman) && (
																<ul className="list-decimal mb-4 ml-4 text-sm text-[#ffffff]">
																	{tema.struktur_halaman.map(
																		(halaman: string, i: number) => (
																			<li key={i}>{halaman}</li>
																		)
																	)}
																</ul>
															)}
														</li>
													)
												)}
											</ul>
										</section>
									)}

								{submission.ketentuan_desain && (
									<section className="bg-[#1e1e2f] rounded-lg p-6 shadow-md">
										<h2 className="text-xl font-semibold text-[#ffffff]">
											📐 Ketentuan Desain
										</h2>
										<ul className="list-disc ml-6 text-[#ffffff]">
											{"jumlah_halaman_minimal" in
												submission.ketentuan_desain && (
													<li>
														Minimal{" "}
														{submission.ketentuan_desain.jumlah_halaman_minimal}{" "}
														halaman
													</li>
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
									</section>
								)}

								{submission.pengumpulan?.format && (
									<section className="bg-[#1e1e2f] rounded-lg p-6 shadow-md">
										<h2 className="text-xl font-semibold text-[#ffffff]">
											📂 Pengumpulan
										</h2>
										<p className="text-sm text-[#ffffff]">Format:</p>
										<ul className="list-disc ml-6 text-[#ffffff]">
											<li>Nama: {submission.pengumpulan.format.nama}</li>
											<li>Tema: {submission.pengumpulan.format.tema}</li>
											<li>
												Link Desain: {submission.pengumpulan.format.link_desain}
											</li>
											<li>
												Deskripsi: {submission.pengumpulan.format.deskripsi}
											</li>
										</ul>
									</section>
								)}

								{submission.tujuan && (
									<section className="bg-[#1e1e2f] rounded-lg p-6 shadow-md">
										<h2 className="text-xl font-semibold text-[#ffffff]">
											🎯 Tujuan
										</h2>
										<p className="text-[#ffffff]">{submission.tujuan}</p>
									</section>
								)}

								{submission.ketentuan_teknis && (
									<section className="bg-[#1e1e2f] rounded-lg p-6 shadow-md">
										<h2 className="text-xl font-semibold text-[#ffffff]">
											🧩 Ketentuan Teknis
										</h2>
										<div className="mt-2">
											<p className="font-semibold">File & Struktur</p>
											<ul className="list-disc ml-6 text-[#ffffff]">
												{submission.ketentuan_teknis.utama && (
													<li>
														Satu file utama: {submission.ketentuan_teknis.utama}
													</li>
												)}
												{submission.ketentuan_teknis.folder_gambar && (
													<li>
														Satu folder gambar (opsional):{" "}
														{submission.ketentuan_teknis.folder_gambar}
													</li>
												)}
												{submission.ketentuan_teknis.contoh && (
													<li>Contoh: {submission.ketentuan_teknis.contoh}</li>
												)}
											</ul>
										</div>
									</section>
								)}

								{submission.wajib_ada && Array.isArray(submission.wajib_ada) && (
									<section className="bg-[#1e1e2f] rounded-lg p-6 shadow-md">
										<h2 className="text-xl font-semibold text-[#ffffff]">
											✅ Wajib Ada (min 7 elemen)
										</h2>
										<ul className="list-disc ml-6 text-[#ffffff]">
											{submission.wajib_ada.map((item: string, i: number) => (
												<li key={i}>{item}</li>
											))}
										</ul>
									</section>
								)}

								{submission.opsional && Array.isArray(submission.opsional) && (
									<section className="bg-[#1e1e2f] rounded-lg p-6 shadow-md">
										<h2 className="text-xl font-semibold text-[#ffffff]">
											✨ Opsional (nilai plus)
										</h2>
										<ul className="list-disc ml-6 text-[#ffffff]">
											{submission.opsional.map((item: string, i: number) => (
												<li key={i}>{item}</li>
											))}
										</ul>
									</section>
								)}

								{submission.kriteria_penilaian_html &&
									Array.isArray(submission.kriteria_penilaian_html) && (
										<section className="bg-[#1e1e2f] rounded-lg p-6 shadow-md">
											<h2 className="text-xl font-semibold text-[#ffffff]">
												📊 Kriteria Penilaian (100 poin)
											</h2>
											<ul className="list-disc ml-6 text-[#ffffff]">
												{submission.kriteria_penilaian_html.map(
													(k: any, i: number) => (
														<li key={i}>
															{k.judul} ({k.poin} pts)
															{k.rincian && Array.isArray(k.rincian) && (
																<ul className="list-disc ml-6">
																	{k.rincian.map((r: string, j: number) => (
																		<li key={j}>{r}</li>
																	))}
																</ul>
															)}
														</li>
													)
												)}
											</ul>
										</section>
									)}

								{submission.kriteria_penilaian &&
									Array.isArray(submission.kriteria_penilaian) &&
									!submission.kriteria_penilaian_html && (
										<section className="bg-[#1e1e2f] rounded-lg p-6 shadow-md">
											<h2 className="text-xl font-semibold text-[#ffffff]">
												✅ Kriteria Penilaian
											</h2>
											<ul className="list-disc ml-6 text-[#ffffff]">
												{submission.kriteria_penilaian.map(
													(k: string, index: number) => (
														<li key={index}>{k}</li>
													)
												)}
											</ul>
										</section>
									)}

								{submission.cara_pengumpulan && (
									<section className="bg-[#1e1e2f] rounded-lg p-6 shadow-md">
										<h2 className="text-xl font-semibold text-[#ffffff]">
											📬 Cara Pengumpulan
										</h2>
										<ul className="list-disc ml-6 text-[#ffffff]">
											{submission.cara_pengumpulan.nama_file && (
												<li>
													Nama file: {submission.cara_pengumpulan.nama_file}
												</li>
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
									</section>
								)}

								{submission.deadline && (
									<section className="bg-[#1e1e2f] rounded-lg p-6 shadow-md">
										<h2 className="text-xl font-semibold text-[#ffffff]">
											⏳ Deadline
										</h2>
										<p className="text-[#ffffff]">
											{submission.deadline.tanggal} - {submission.deadline.waktu}
										</p>
									</section>
								)}

								{submission.catatan && (
									<section className="bg-[#1e1e2f] rounded-lg p-6 shadow-md">
										<p className="text-yellow-300 mt-4">{submission.catatan}</p>
									</section>
								)}

								{submission.reward && (
									<section className="bg-[#1e1e2f] rounded-lg p-6 shadow-md">
										<p className="text-green-300 mt-2">🎁 {submission.reward}</p>
									</section>
								)}

								{submission.kontak && (
									<section className="bg-[#1e1e2f] rounded-lg p-6 shadow-md">
										<p className="mt-2">📞 {submission.kontak}</p>
									</section>
								)}

								{submission.motivasi && (
									<section className="bg-[#1e1e2f] rounded-lg p-6 shadow-md">
										<p className="mt-2 text-[#ffffff]">{submission.motivasi}</p>
									</section>
								)}

								{submission.status === "Open" ? (
									<a
										href={submission.submissionUrl}
										target="_Blank"
										rel="noopener noreferrer"
										className="bg-[#2e53b0] text-[#ffffff] text-xxl py-3 w-full px-5 me-3 rounded-xl d-block hover:bg-blue-600 transition"
									>
										SUBMIT
									</a>
								) : (
									<p className="text-[#ffffff] text-center text-2xl">
										Status: {submission.status}
									</p>
								)}
							</div>
						)
					) : (
						<p className="text-[#ffffff] text-center text-3xl">Submission tidak ditemukan.</p>
					)}
				</Element>
			</main>

			<Footer />
		</>
	);
}
