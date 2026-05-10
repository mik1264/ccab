from pathlib import Path
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

    anthropic_api_key: str = ""

    smtp_host: str = ""
    smtp_port: int = 587
    smtp_user: str = ""
    smtp_password: str = ""
    smtp_from: str = ""
    smtp_to: str = ""
    smtp_use_tls: bool = True

    report_cron: str = "0 21 * * fri"
    timezone: str = "America/Los_Angeles"

    basic_auth_user: str = ""
    basic_auth_password: str = ""

    data_dir: str = "data"
    storage_dir: str = "storage"
    database_url: str = "sqlite:///data/receipts.db"

    @property
    def project_root(self) -> Path:
        return Path(__file__).resolve().parent.parent

    @property
    def data_path(self) -> Path:
        p = self.project_root / self.data_dir
        p.mkdir(parents=True, exist_ok=True)
        return p

    @property
    def storage_path(self) -> Path:
        p = self.project_root / self.storage_dir
        p.mkdir(parents=True, exist_ok=True)
        return p


settings = Settings()
