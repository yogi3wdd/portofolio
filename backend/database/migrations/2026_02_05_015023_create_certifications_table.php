<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {

    public function up(): void
    {
        Schema::create('certifications', function (Blueprint $table) {
            $table->id();
            $table->string('name'); // Nama Sertifikasi (contoh: Google Cloud Engineer)
            $table->string('issuer'); // Lembaga Penerbit (contoh: Coursera, Google, Dicoding)
            $table->date('issue_date'); // Tanggal Terbit
            $table->date('expiration_date')->nullable(); // Tanggal Kadaluarsa (opsional)
            $table->string('credential_id')->nullable(); // ID Sertifikat (opsional)
            $table->string('credential_url')->nullable(); // Link ke sertifikat online
            $table->string('image')->nullable(); // Foto/Scan sertifikat (disimpan di Supabase Storage)
            $table->text('description')->nullable(); // Penjelasan singkat
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('certifications');
    }
};