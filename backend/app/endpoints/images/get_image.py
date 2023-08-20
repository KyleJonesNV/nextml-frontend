from app.config import config
from os import path

from fastapi.responses import FileResponse
from fastapi import APIRouter, status

router = APIRouter()


@router.get(
    "/images/{file_stem}",
    status_code=status.HTTP_200_OK,
)
async def get_image(file_stem: str):
    fullPath=path.join(config.images_dir, (file_stem + ".jpg"))
    return FileResponse(fullPath)