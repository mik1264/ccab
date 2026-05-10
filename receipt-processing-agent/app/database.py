from sqlmodel import Session, SQLModel, create_engine

from .config import settings

_db_url = settings.database_url
if _db_url.startswith("sqlite:///") and not _db_url.startswith("sqlite:////"):
    relative = _db_url.replace("sqlite:///", "", 1)
    _db_url = f"sqlite:///{settings.project_root / relative}"

engine = create_engine(_db_url, echo=False, connect_args={"check_same_thread": False})


def init_db() -> None:
    from . import models  # noqa: F401  ensure tables registered

    SQLModel.metadata.create_all(engine)


def get_session() -> Session:
    return Session(engine)
