# Spiritual Reading

A Korean ebook reader for *마음에서 들려오는 사랑의 소리* (Henri J. M. Nouwen, *The Inner Voice of Love*) with built-in TTS — browser speech synthesis by default, ElevenLabs AI voice when configured.

## Running locally

It's a static site. Open `index.html` directly, or serve the folder with any static server:

```sh
npx serve .
# or
python3 -m http.server
```

## TTS

The reader has two engines, picked from the **음성 설정** (cog) button:

- **Browser** — `speechSynthesis`. Free, works out of the box, voice quality varies by OS.
- **ElevenLabs** — AI narrator. Higher quality. Each visitor enters their own API key in the dialog; keys live in `localStorage` and never leave the device.

Before either engine is consulted, the app first looks for a pre-generated MP3 at `audio/{sectionIndex}.mp3`. If one exists, it plays directly — so visitors get the AI voice without needing their own key.

## Generating chapter audio

The repo ships without `audio/` populated. To pre-generate the MP3s yourself:

1. **Install Node 18+** (uses the built-in `fetch` and ESM globals).
2. **Set your ElevenLabs key.** Copy the template and fill it in:

   ```sh
   cp .env.example .env
   ```

   Edit `.env`:

   ```
   ELEVENLABS_API_KEY=xi-your-key-here
   ```

3. **Run the generator** from the repo root:

   ```sh
   node scripts/generate-audio.js
   ```

The script:
- Reads `sections` straight out of `script.js`, so titles + indexes match the live app.
- Skips `sections[0]` (cover), and skips any chapter whose mp3 already exists at `audio/{i}.mp3` — re-runs are cheap and resumable.
- Uses the same voice ID, model, and voice settings as the runtime, so pre-generated and on-demand audio sound identical.
- Bails out on `401` / `403` / `429` so a bad key or quota cap doesn't burn through requests.

### Flags

```sh
node scripts/generate-audio.js --help            # usage
node scripts/generate-audio.js --force           # regenerate everything
node scripts/generate-audio.js --only=3          # only section index 3
node scripts/generate-audio.js --voice=<id>      # override voice for this run
```

### Cost

A full pass is ≈ **13,800 ElevenLabs credits** on `eleven_multilingual_v2` (1 credit per character of input). After it's done, every visitor plays from the static MP3s — no API calls at runtime.

## Project layout

```
.
├── index.html            # markup + control bar + settings modal
├── styles.css            # paged-book look, mobile overrides, modal, spinner
├── script.js             # pagination engine + TTS engine (audio + browser)
├── audio/                # pre-generated narrator MP3s (audio/{i}.mp3)
├── scripts/
│   └── generate-audio.js # ElevenLabs batch generator
├── .env.example
├── .gitignore
└── README.md
```
