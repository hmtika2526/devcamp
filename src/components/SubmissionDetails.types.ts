export interface SubmissionData {
    name: string;
    title: string;
    desc?: string;
    status: "Open" | "Closed";
    submissionUrl?: string;

    // Common fields
    tujuan?: string;
    catatan?: string;
    kontak?: string;
    motivasi?: string;
    reward?: string;

    // Capstone specific
    tema_desain?: TemaDesain[];
    ketentuan_teknis?: KetentuanTeknis;
    kriteria_penilaian?: string[];
    distinction?: Record<string, string>;
    pengumpulan?: Pengumpulan;
    deadline?: Deadline;
    tips?: Record<string, string | string[]>;

    // Regular submission fields
    ketentuan_desain?: KetentuanDesain;
    wajib_ada?: string[];
    opsional?: string[];
    kriteria_penilaian_html?: KriteriaPenilaian[];
    cara_pengumpulan?: CaraPengumpulan;
}

export interface TemaDesain {
    judul: string;
    deskripsi: string;
    struktur_halaman?: string[];
}

export interface KetentuanTeknis {
    utama?: string;
    folder_gambar?: string;
    contoh?: string;
    [key: string]: string | string[] | undefined;
}

export interface KetentuanDesain {
    jumlah_halaman_minimal?: string;
    tool_desain?: string;
    prinsip_uiux?: string;
    orisinilitas?: string;
}

export interface KriteriaPenilaian {
    judul: string;
    poin: string;
    rincian?: string[];
}

export interface Pengumpulan {
    wajib?: string[];
    catatan?: string;
    format?: {
        nama: string;
        tema: string;
        link_desain: string;
        deskripsi: string;
    };
}

export interface CaraPengumpulan {
    nama_file?: string;
    contoh?: string;
    zip?: string;
    link?: string;
}

export interface Deadline {
    tanggal: string;
    waktu: string;
}