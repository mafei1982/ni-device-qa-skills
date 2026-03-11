import asyncio
import os
import sys
from dotenv import load_dotenv
from openai import AsyncOpenAI
from doc_processor import CLEANUP_SYSTEM_PROMPT

load_dotenv()

async def test_llm():
    client = AsyncOpenAI(
        base_url=os.environ['LLM_API_URL'],
        api_key=os.environ['LLM_API_KEY']
    )
    
    model = os.environ.get('DOC_PROCESS_MODEL', 'google/gemini-3.1-pro-preview')
    
    try:
        with open('skills/docs/pxie_4191_user_manual.md', 'r', encoding='utf-8') as f:
            raw_md = f.read()
            
        print(f"Loaded {len(raw_md)} chars from file")
            
        response = await client.chat.completions.create(
            model=model,
            messages=[
                {"role": "system", "content": CLEANUP_SYSTEM_PROMPT},
                {
                    "role": "user",
                    "content": (
                        "Clean up the following MinerU-generated Markdown. "
                        "Apply all five rules.\n\n"
                        f"{raw_md}"
                    ),
                },
            ],
            temperature=0.1,
        )
        
        cleaned = response.choices[0].message.content or ""
        print(f"Success! Returned {len(cleaned)} chars")
        if len(cleaned) < 100:
            print("Content:", repr(cleaned))
            
    except Exception as e:
        print("Error:", e)

if __name__ == "__main__":
    asyncio.run(test_llm())
